import express from "express";
import { join } from "node:path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { renderJsx } from "./renderers/customjsx";
import { renderStringConcat } from "./renderers/string-concat";
import { renderStringInterpolate } from "./renderers/string-interpolate";
import { rows as allRows, search } from "./search";

const filename = fileURLToPath(import.meta.url);
const __dirname = dirname(filename);
const app = express();

app.use("/assets", express.static(join(__dirname, "assets")));

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
app.get("/search", (req, res) => {
  const pageNum =
    parseInt(typeof req.query.page === "string" ? req.query.page : "1") || 1;

  const searchTerm = typeof req.query.query === "string" ? req.query.query : "";

  if (searchTerm === "") {
    return res.redirect("/");
  }

  if (!validSearchTermRegex.test(searchTerm)) {
    return res.redirect("/");
  }

  if (searchTerm === "" || searchTerm.length > 255) {
    res
      .contentType("html")
      .send(renderPaginated(pageNum - 1))
      .end();
  } else {
    res
      .contentType("html")
      .send(renderSearch(pageNum - 1, searchTerm))
      .end();
  }
});

app.get("/:page?", (req, res) => {
  const pageNum =
    parseInt(typeof req.params.page === "string" ? req.params.page : "1") || 1;

  res
    .contentType("html")
    .send(renderPaginated(pageNum - 1))
    .end();
});

app.get("/jsx", (req, res) => {
  const output = renderJsx(0);

  console.log(output);

  res.contentType("html").send().end(output);
});

export const server = app.listen(process.env.PORT || 8080, () => {
  const address = server.address();
  console.log(
    `Listening on http://localhost:${
      typeof address === "string" ? address : address?.port
    }`
  );
});
