import * as fs from "node:fs";

for(let i = 0; i < 1000; i++) {
  fs.writeFileSync(`./file-${i}.txt`, `Hello, World! ${i}`);
}