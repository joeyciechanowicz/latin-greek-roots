export function prevUrl(pageNum: number, query: string) {
  if (query) {
    return "/search" + "?query=" + query + "&page=" + pageNum;
  }
  return "/" + pageNum;
}

export function nextUrl(pageNum: number, query: string) {
  if (query) {
    return "/search" + "?query=" + query + "&page=" + (pageNum + 2);
  }
  return "/" + (pageNum + 2);
}
