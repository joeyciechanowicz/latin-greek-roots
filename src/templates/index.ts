import { readFileSync } from "node:fs";

export const header = readFileSync("./src/templates/header.html").toString();
export const footer = readFileSync("./src/templates/footer.html").toString();
