import { readFileSync } from "fs";

const file = readFileSync("./input.txt", "utf-8");

const calibrationEntries = file.split("\n").filter(Boolean);

const digits = calibrationEntries.map((entry) => {
    const digits = entry.match(/\d/g);
    const first = digits?.[0];
    const last = digits?.[digits.length - 1];
    return first! + last!;
});
let sum =0;
for(let i = 0; i < digits.length; i++) {
    sum += parseInt(digits[i]!);
}
console.log(sum);