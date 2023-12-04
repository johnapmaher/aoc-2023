import { readFileSync } from "fs";

const file = readFileSync("./sample-input.txt", "utf-8");

const calibrationEntries = file.split("\n").filter(Boolean);

const digitStringLookup = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
};

for (const calibrationEntry in calibrationEntries) {
  console.log(`Searching through: ${calibrationEntry}`);
  for (const digit in digitStringLookup) {
    console.log(`Searching for: ${digit}`);
    console.log(`Value of: ${digitStringLookup[digit as number]}`);
    if (calibrationEntry.includes(digit.valueOf())) {
      const location = calibrationEntry.indexOf(digit);
      console.log(calibrationEntry);
      if (location === -1) {
        console.log("not found");
      } else {
      }
      console.log(location);
    }
  }
}
