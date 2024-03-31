// import { App } from "uWebSockets.js";
import { App } from "@sifrr/server";

import { readFileSync } from "node:fs";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { renderStringConcat } from "./renderers/string-concat";
import { rows as allRows, search } from "./search";
import { renderJsx } from "./renderers/customjsx";
import { ROWS_PER_PAGE } from "./types";

const filename = fileURLToPath(import.meta.url);
const __dirname = dirname(filename);

const favicon = readFileSync(__dirname + "/assets/favicon.ico");
const css = readFileSync(__dirname + "/assets/index.css");
const date = new Date();

const app = new App({});

app.get("/assets/favicon.ico", (res, req) => {
  res.writeHeader("content-type", "image/x-icon").end(favicon);
});
app.get("/assets/index.css", (res, req) => {
  res
    .writeHeader("content-type", "text/css; charset=UTF-8")
    .writeHeader("Last-Modified", date.toString())
    .end(css);
});
// app.folder("/assets", __dirname + "/assets", {});

const renderPaginated = (page: number) => {
  return renderStringConcat({
    currentPage: page,
    query: "",
    maxPage: Math.ceil(allRows.length / ROWS_PER_PAGE),
    rowsSlice: allRows.slice(
      page * ROWS_PER_PAGE,
      (page + 1) * ROWS_PER_PAGE - 1
    ),
  });
};

const renderSearch = (page: number, query: string) => {
  const searchRows = search(query);
  return renderStringConcat({
    currentPage: page,
    query,
    rowsSlice: searchRows.slice(
      page * ROWS_PER_PAGE,
      (page + 1) * ROWS_PER_PAGE - 1
    ),
    maxPage: Math.ceil(searchRows.length / ROWS_PER_PAGE),
  });
};

const validSearchTermRegex = /^[a-zA-Z-]+$/;

// must be before the main route, below, so that
// "search" doesn't get matched as a page number
app.get("/search", (res, req) => {
  const page = req.getQuery("page");
  const query = req.getQuery("query");

  const pageNum = parseInt(page ? page : "1") || 1;

  const searchTerm = query ? query : "";

  if (searchTerm === "") {
    return res.redirect("/");
  }

  if (!validSearchTermRegex.test(searchTerm)) {
    return res.redirect("/");
  }

  res
    .writeHeader("content-type", "html")
    .end(renderSearch(pageNum - 1, searchTerm));
});

app.get("/jsx", (res, req) => {
  res
    .writeHeader("content-type", "html")
    .end(renderJsx({ currentPage: 0, query: "", rows: allRows.slice(0, 50) }));
});

app.get("/:page?", (res, req) => {
  const page = req.getParameter(0);
  const pageNum = parseInt(page ? page : "1") || 1;

  res.writeHeader("content-type", "html").end(renderPaginated(pageNum - 1));
});

app.get("/", (res, req) => {
  res.writeHeader("content-type", "html").end(renderPaginated(0));
});

const port = parseInt(process.env.PORT || "") || 8080;
app.listen(port, (token) => {
  if (token) {
    console.log("Listening to port " + port);
  } else {
    console.log("Failed to listen to port " + port);
  }
});
