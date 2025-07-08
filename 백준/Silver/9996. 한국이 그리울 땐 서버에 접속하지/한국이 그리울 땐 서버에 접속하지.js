const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const pattern = input[1];
const files = input.slice(2);

const [prefix, suffix] = pattern.split("*");

files.forEach((filename) => {
  if (filename.length < prefix.length + suffix.length) {
    console.log("NE");
  } else {
    const isPrefix = filename.startsWith(prefix);
    const isSuffix = filename.endsWith(suffix);
    if (isPrefix && isSuffix) {
      console.log("DA");
    } else {
      console.log("NE");
    }
  }
});