import { rows } from "../search";
import { renderStringConcatStrict } from "./string-concat";

console.profile();

const COUNT = 1_000_000;

let total = 0;
for (let i = 0; i < COUNT; i++) {
  try {
    const quarter = rows.length / 4;
    const start = Math.floor(Math.random() * quarter + quarter);
    const end = Math.floor(Math.random() * quarter + 2 * quarter);
    const r = Math.random();
    const s = renderStringConcatStrict(start, end, "some-query", rows);
    console.log(s.length, start, end);
  } catch {
    total -= 1;
  }
}

console.log(total);

console.profileEnd();
