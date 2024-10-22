import * as fs from "node:fs";

for(let i = 0; i < 1000; i++) {

  // now delete the file
  fs.unlinkSync(`./file-${i}.txt`);


}