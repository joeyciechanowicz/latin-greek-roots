import rowsJson from "./rows.json";
import trieJson from "./trie.json";
import { Row, TrieNode } from "./types";

export const trie = trieJson as TrieNode;
export const rows = rowsJson as Row[];

const walk = (set: Set<number>, node: TrieNode): void => {
  if (node.words.length > 0) {
    node.words.forEach((index) => set.add(index));
  }

  for (const key in node.children) {
    walk(set, node.children[key]);
  }
};

// searches the trie and returns the array of rows that matched
export const search = (searchTerm: string): Row[] => {
  const loweredTerm = searchTerm.toLowerCase();
  let currentNode: TrieNode = trie;

  // Walk the trie given the current search term
  for (let i = 0; i < loweredTerm.length; i++) {
    const letter = loweredTerm[i];

    if (currentNode.children[letter]) {
      currentNode = currentNode.children[letter];
    } else {
      // nothing found
      return [];
    }
  }

  // Now we walk the trie from this point and add all other roots we find
  const indices = new Set<number>();
  walk(indices, currentNode);

  const results = Array.from(indices).map((i) => rows[i]);

  return results;
};
