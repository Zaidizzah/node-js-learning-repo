import fs from "fs";
import { EOL } from "node:os";
import path from "node:path";

const exampleFileDirectory = "example-documents/example-file.txt";

fs.writeFile(
  exampleFileDirectory,
  "Example file for understanding file system module in NODEJS.",
  "utf8",
  () => {
    fs.readFile(exampleFileDirectory, (err, data) => {
      if (err) {
        console.error(
          `Error while reading file /${path.basename(exampleFileDirectory)}/: ${err}`,
        );
        return;
      }

      console.log(
        `The file content for file /${path.basename(exampleFileDirectory)}/ is:${EOL} ${data}`,
      );
    });
  },
);

console.log(
  `This message will executed FIRST! if the proses it took several times to process :READ and :WRITE file /${path.basename(exampleFileDirectory)}/.` +
    EOL,
);
