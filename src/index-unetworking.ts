// import { App } from "uWebSockets.js";
import { App } from "@sifrr/server";

import { readFileSync } from "node:fs";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { renderStringConcat } from "./renderers/string-concat";
import { rows as allRows, search } from "./search";

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
    rows: allRows,
  });
};

const renderSearch = (page: number, query: string) => {
  const searchRows = search(query);
  return renderStringConcat({
    currentPage: page,
    query,
    rows: searchRows,
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
