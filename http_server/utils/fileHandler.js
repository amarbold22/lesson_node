const fs = require("fs");
const path = require("path");

const p = path.join(__dirname, "../data/");

const readFile = (fileName) => {
    const { data } =  JSON.parse(fs.readFileSync(p + fileName, { encoding: "utf-8" }));
    return data;
}

const writeFile = ( fileName, data ) => {
    return fs.writeFileSync(p + fileName, JSON.stringify({ data }), { encoding: "utf-8" })
}

module.exports = { readFile, writeFile };