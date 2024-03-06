export const ROWS_PER_PAGE = 50;

export type TrieNode = {
  /**
   * List of indexes that match this path in the trie
   */
  words: number[];
  children: Record<string, TrieNode>;
};

export interface Row {
  // index: number;
  roots: string[];
  meaning: string;
  originLanguage: "Latin" | "Greek" | string;
  etymology: string;
  examples: string[];
}

export type RenderFunc = (
  currentPage: number,
  maxPage: number,
  query: string,
  rows: Row[]
) => string;
