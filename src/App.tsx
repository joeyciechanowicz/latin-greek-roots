import { Component, createResource, createSignal } from "solid-js";
import { ROWS_FILENAME, TRIE_FILENAME } from "./asset-manifest";

import logo from "./logo.svg";
import styles from "./App.module.css";

const fetchTrie = async () => (await fetch(`/${TRIE_FILENAME}`)).json();
const fetchRows = async () => (await fetch(`/${ROWS_FILENAME}`)).json();

const App: Component = () => {
  const [rows] = createResource(fetchRows);
  const [trie] = createResource(fetchTrie);

  return (
    <>
      {rows.loading && <h1>Loading...</h1>}
      {rows.error && (
        <main>
          <h1>There was an error loading the data</h1>
          <p>{rows.error}</p>
        </main>
      )}
    </>
    // <div class={styles.App}>
    //   <header class={styles.header}>
    //     <img src={logo} class={styles.logo} alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       class={styles.link}
    //       href="https://github.com/solidjs/solid"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn Solid
    //     </a>
    //   </header>
    // </div>
  );
};

export default App;
