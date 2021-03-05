import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let linesContent: string[] = [];
let numberOfLines: number;
let stringifiedConvertedContent: string = "";

function storeContentToParse(): Promise<string[]> {
  return new Promise(function (resolve, reject) {
    rl.on("line", async function (lineContent) {
      linesContent.push(lineContent.replace(/\s/g, "")); // @TODO find a way to keep whitespaces inside strings
    })
      .on("close", function () {
        resolve(linesContent);
      })
      .on("error", function (e) {
        console.log("---> ERROR", e);
      });
  });
}

function convertPrimitiveElement(content: string): string {
  if (["true", "false"].includes(content)) {
    return content;
  }

  if (content[0] === "'") {
    const result = `"${content}"`;
    return result.replace(/'/g, "");
  }

  return content;
}

function convert(content: string): string {
  if (content[0] === "(") {
    return "[";
  }

  if (content[0] === ")") {
    if (content[1] === ";") {
      return "],";
    }
    return "]";
  }

  if (content.includes("=")) {
    // KEY VALUE CASE
    const [key, value] = content.split("=");

    const convertedObject = {};
    const doubleQuotedKey = convertPrimitiveElement(key);
    convertedObject[doubleQuotedKey] = convertPrimitiveElement(value);
    return `${convertedObject}`;
  }

  return convertPrimitiveElement(content);
}

function convertContent() {
  for (const content of linesContent) {
    console.log("--------> CONTENT", content);
    const convertedContent = convert(content);
    stringifiedConvertedContent = `${stringifiedConvertedContent}${convertedContent}`;
  }
}

async function startConverter() {
  await storeContentToParse();
  numberOfLines = parseInt(linesContent[0]);
  if (numberOfLines) {
    linesContent.shift();

    convertContent();
    console.log(
      "--------> stringifiedConvertedContent",
      stringifiedConvertedContent
    );
    const result = JSON.parse(stringifiedConvertedContent);

    console.log("------> result to JSON", result);
    return result;
  }
}

startConverter();
