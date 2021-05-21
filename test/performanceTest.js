const fs = require("fs");
const performance = require("perf_hooks").performance;

const regexes = [
    /(?:#|\/\/)\s*(todo.*)|\/\*\s*(todo[\s\S]*?)\*\/|<!--\s*(todo[\s\S]*?)-->/gi,
    /(?:#|\/\/)\s*(fixme.*)|\/\*\s*(fixme[\s\S]*?)\*\/|<!--\s*(fixme[\s\S]*?)-->/gi,
    /(?:#|\/\/)\s*(task.*)|\/\*\s*(task[\s\S]*?)\*\/|<!--\s*(task[\s\S]*?)-->/gi,
    /(?:#|\/\/)\s*(assignment.*)|\/\*\s*(assignment[\s\S]*?)\*\/|<!--\s*(assignment[\s\S]*?)-->/gi,
]

const keywords = ["todo", "fixme", "task", "assignment"];

const regexUniform = /(?:#|\/\/)\s*(todo.*)|\/\*\s*(todo[\s\S]*?)\*\/|<!--\s*(todo[\s\S]*?)-->/gi;

const text = fs.readFileSync("./src/extension.js").toString("utf-8") + "/* todo this is a todo comment */";

const arrayLength = 100000;

const used0 = process.memoryUsage().heapUsed / 1024 / 1024;

const formerWithRegexes = Array(arrayLength).fill(0).map(() => {
    const t0 = performance.now();
    regexes.map(regex => {
		let match;
		while (match = regex.exec(text)) {
		}
	});
    const t1 = performance.now();
    return t1-t0;
}).reduce((acc, value) => (acc + value) ) / arrayLength;

const used1 = process.memoryUsage().heapUsed / 1024 / 1024 - used0;
console.log(`The former version used approximately ${Math.round(used1 * 100) / 100} MB`);
console.log("Former", formerWithRegexes);

const improvedWithIncludes = Array(arrayLength).fill(0).map(() => {
    const t0 = performance.now();
    let match;
    while (match = regexUniform.exec(text)) {
        keywords.map(keyword => {
            if (match[0].includes(keyword)) {
            }
        })
    }
    const t1 = performance.now();
    return t1-t0;
}).reduce((acc, value) => (acc + value)) / arrayLength;

const used2 = process.memoryUsage().heapUsed / 1024 / 1024 - used1 - used0;
console.log(`The current vresion uses approximately ${Math.round(used2 * 100) / 100} MB`);
console.log("Improved", improvedWithIncludes);


