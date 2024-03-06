import fs from "node:fs";
import { promisify } from "node:util";
import { JSDOM, ResourceLoader } from "jsdom";
import { Row, TrieNode } from "./src/types";

const writeFile = promisify(fs.writeFile);

// Needed when running inside of a VPN
const resourceLoader = new ResourceLoader({
  strictSSL: false,
});

async function extractWikipediaData(
  url: string
): Promise<Omit<Row, "index">[]> {
  const dom = await JSDOM.fromURL(url, { resources: resourceLoader });

  return (
    Array.from(
      dom.window.document.querySelectorAll<HTMLTableRowElement>(
        ".wikitable.sortable tbody tr"
      )
    )
      .map((row) => row.cells)
      .map((row) => ({
        roots: row[0],
        meaning: row[1],
        originLanguage: row[2],
        etymology: row[3],
        examples: row[4],
      }))
      .filter(
        (row) =>
          row.meaning &&
          row.meaning.textContent &&
          row.examples &&
          row.examples.textContent
      )
      .map<Omit<Row, "index">>((row) => ({
        roots: Array.from(row.roots.querySelectorAll("b")).map(
          (y) => y.textContent?.toLowerCase().trim() ?? ""
        ),
        meaning: row.meaning.textContent ?? "",
        originLanguage: row.originLanguage.textContent ?? "Unknown",
        etymology: row.etymology.textContent ?? "",
        examples:
          row?.examples?.textContent?.split(",").map((y) => y.trim()) ?? [],
      }))
      // Ignore rows that don't have a meaning and examples column (such as the repeated header row)
      .filter((row) => row.roots.length > 0)
  );
}

async function extractAllData() {
  const aToG = await extractWikipediaData(
    "https://en.wikipedia.org/wiki/List_of_Greek_and_Latin_roots_in_English/A-G"
  );
  const hToO = await extractWikipediaData(
    "https://en.wikipedia.org/wiki/List_of_Greek_and_Latin_roots_in_English/H-O"
  );
  const pToZ = await extractWikipediaData(
    "https://en.wikipedia.org/wiki/List_of_Greek_and_Latin_roots_in_English/P-Z"
  );

  return aToG.concat(hToO).concat(pToZ);
}

async function buildSearchIndex(rows: Row[]) {
  const trie: TrieNode = {
    words: [],
    children: {},
  };

  rows.forEach((row, index) => {
    row.roots
      .map((root) => root.toLowerCase())
      .forEach((root) => {
        // add 'non' and 'non-' so a specific root can be searched for
        addWordToTrie(root, index);
        addWordToTrie(root.replace(/-/g, ""), index);
      });

    row.examples
      .map((meaning) => meaning.toLowerCase())
      .forEach((meaning) => addWordToTrie(meaning, index));
  });

  /**
   *
   * @param word a word to add
   * @param index index of the word within array of rows
   */
  function addWordToTrie(word: string, index: number) {
    if (word.indexOf("_") !== -1) {
      throw new Error(`The word contains an underscore: ${word}`);
    }

    // Iterate each letter of our root, using it to walk the trie and locate
    // the final node where we can add this root
    const node = Array.from(word).reduce((node, letter) => {
      if (!node.children[letter]) {
        node.children[letter] = {
          children: {},
          words: [],
        };
      }

      return node.children[letter];
    }, trie);

    node.words.push(index);
  }

  return trie;
}

async function run() {
  const rows = await extractAllData();
  const trie = await buildSearchIndex(rows);

  const trieHash = await writeFile("./src/trie.json", JSON.stringify(trie));
  const rowsHash = await writeFile("./src/rows.json", JSON.stringify(rows));
}

run()
  .then(() => console.log("Completed"))
  .catch(console.error);
