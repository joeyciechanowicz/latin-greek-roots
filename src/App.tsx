import {
  Accessor,
  batch,
  Component,
  createEffect,
  createResource,
  createSignal,
  For,
  on,
  Show,
  Suspense,
} from "solid-js";
import { ROWS_FILENAME, TRIE_FILENAME } from "./asset-manifest";
import { Header } from "./header";
import { Row, TrieNode } from "./types";

const fetchTrie = async () => (await fetch(`/${TRIE_FILENAME}`)).json();
const fetchRows = async () => (await fetch(`/${ROWS_FILENAME}`)).json();

const ROWS_PER_PAGE = 50;

const Table: Component<{ rows: Accessor<any> }> = ({ rows }) => {
  const [currentRows, setCurrentRows] = createSignal<Row[]>([]);
  const [currentPage, setCurrentPage] = createSignal(0);

  createEffect(() => {
    setCurrentRows(
      rows().slice(
        currentPage() * ROWS_PER_PAGE,
        (currentPage() + 1) * ROWS_PER_PAGE
      )
    );
  });

  createEffect(
    on(rows, (updatedRows) => {
      batch(() => {
        setCurrentPage(0);
        setCurrentRows(updatedRows.slice(0, ROWS_PER_PAGE));
      });
    })
  );

  const setPage = (change: -1 | 1) => {
    const nextPageNum = currentPage() + change;
    if (nextPageNum >= 0 && nextPageNum < rows().length / ROWS_PER_PAGE) {
      setCurrentPage(nextPageNum);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <div className="c-pagination__controls">
        <button disabled={currentPage() === 0} onClick={() => setPage(-1)}>
          Previous
        </button>
        <span className="c-pagination__pagenum">
          {currentPage() + 1} / {Math.ceil(rows().length / ROWS_PER_PAGE)}
        </span>
        <button
          onClick={() => setPage(+1)}
          disabled={currentPage() + 1 >= rows().length / ROWS_PER_PAGE}
        >
          Next
        </button>
      </div>
      {rows().length === 0 ? (
        <p>No search results found</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th scope="col">Roots</th>
              <th scope="col">Meaning</th>
              <th scope="col">Origin Language</th>
              <th scope="col">Etymology</th>
              <th scope="col">Examples</th>
            </tr>
          </thead>
          <For each={currentRows()}>
            {(row) => (
              <tr>
                <td>{row.roots.join(", ")}</td>
                <td>{row.meaning}</td>
                <td>{row.originLanguage}</td>
                <td>{row.etymology}</td>
                <td>{row.examples.join(", ")}</td>
              </tr>
            )}
          </For>
        </table>
      )}
    </>
  );
};

const walk = (set: Set<number>, node: TrieNode): void => {
  if (node._) {
    node._.forEach((index) => set.add(index));
  }

  for (const key in node) {
    if (key === "_") {
      continue;
    }

    walk(set, node[key]);
  }
};

// searches the trie and returns the array of rows that matched
const search = (searchTerm: string, trie: TrieNode, rows: Row[]): Row[] => {
  const loweredTerm = searchTerm.toLowerCase();
  let currentNode: TrieNode = trie;

  // Walk the trie given the current search term
  for (let i = 0; i < loweredTerm.length; i++) {
    const letter = loweredTerm[i];

    if (currentNode[letter]) {
      currentNode = currentNode[letter];
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

const App: Component = () => {
  const [rows] = createResource<Row[]>(fetchRows);
  const [trie] = createResource<TrieNode>(fetchTrie);

  const [searchTerm, setSearchTerm] = createSignal("");
  const [displayedRows, setDisplayedRows] = createSignal<Row[]>([]);

  createEffect(() => {
    if (rows()) {
      if (searchTerm() === "") {
        setDisplayedRows(rows());
      } else {
        const result = search(searchTerm(), trie(), rows());
        setDisplayedRows(result);
      }
    }
  });

  return (
    <>
      <Show when={rows.loading || trie.loading}>
        <p>Loading...</p>
      </Show>
      <Show when={rows.error || trie.error}>
        <p>Error loading the dictionary</p>
      </Show>
      <Show when={!(rows.error || trie.error || rows.loading || trie.loading)}>
        <Header onSearch={setSearchTerm} />
        <Table rows={displayedRows} />
      </Show>
      <footer className="c-footer">
        <p className="">
          Thanks to the Wikipedia pages for Latin and Greek roots{" "}
          <a href="https://en.wikipedia.org/wiki/List_of_Greek_and_Latin_roots_in_English/A-G">
            A-G
          </a>
          ,{" "}
          <a href="https://en.wikipedia.org/wiki/List_of_Greek_and_Latin_roots_in_English/H-O">
            H-O
          </a>
          ,{" "}
          <a href="https://en.wikipedia.org/wiki/List_of_Greek_and_Latin_roots_in_English/P-Z">
            P-Z
          </a>
        </p>
        <p className="row u-center-text">
          Built with <abbr title="love">♥</abbr> by{" "}
          <a href="https://github.com/joeyciechanowicz/latin-greek-roots">
            Joey Ciechanowicz
          </a>
          . Feedback{" "}
          <a href="https://github.com/joeyciechanowicz/latin-greek-roots/issues">
            welcome
          </a>
          .
        </p>
      </footer>
    </>
  );
};

export default App;
