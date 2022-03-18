export type TrieNode = {
  /**
   * List of indexes that match this path in the trie
   */
  // @ts-ignore
  _: number[];
  [prefix: string]: TrieNode;
};

export interface Row {
  index: number;
  roots: string[];
  meaning: string;
  originLanguage: "Latin" | "Greek";
  etymology: string;
  examples: string[];
}
