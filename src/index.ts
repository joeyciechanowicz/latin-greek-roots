import express from "express";
import { readFileSync } from "node:fs";
import { rows as allRows, search } from "./search";
import { ROWS_PER_PAGE, Row } from "./types";
import path from "node:path";
import { renderStringInterpolate } from "./renderers/string-interpolate";

const app = express();

app.use("/assets", express.static(path.join(__dirname, "assets")));

const renderPaginated = (page: number) => {
  return renderStringInterpolate(
    page,
    Math.ceil(allRows.length / ROWS_PER_PAGE),
    "",
    allRows
  );
};

const renderSearch = (page: number, query: string) => {
  const searchRows = search(query);
  return renderStringInterpolate(
    page,
    Math.ceil(searchRows.length / ROWS_PER_PAGE),
    query,
    searchRows
  );
};

app.get("/", (req, res) => {
  const pageNum =
    parseInt(typeof req.query.page === "string" ? req.query.page : "1") || 1;
  res.contentType("html").send(renderPaginated(pageNum)).end();
});

app.get("/search", (req, res) => {
  const pageNum =
    parseInt(typeof req.query.page === "string" ? req.query.page : "1") || 1;
  const searchTerm = typeof req.query.query === "string" ? req.query.query : "";

  if (searchTerm === "") {
    res.contentType("html").send(renderPaginated(pageNum)).end();
  } else {
    res.contentType("html").send(renderSearch(pageNum, searchTerm)).end();
  }
});

export const server = app.listen(process.env.PORT || 8080, () => {
  const address = server.address();
  console.log(
    `Listening on http://localhost:${
      typeof address === "string" ? address : address?.port
    }`
  );
});
