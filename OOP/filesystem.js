// built in
const fs = require("fs");

console.log("Start of File Read");

// fs.readFile("testq.txt", { encoding: "utf8" }, (err, data) => {
//   if (err) {
//     console.log(`Error: ${err}`);
//     return;
//   }

//   console.log("Data", data);
// });

const data = fs.readFileSync("test.txt", { encoding: "utf-8" });
console.log("Нийт үсгийн тоо: ", data.length);
const parsedData = data.split(" ");
console.log("Нийт үгийн тоо: ", parsedData.length);
console.log("Нийт үгийн тоо: ", parsedData);
const count = parsedData.reduce((prev, curr) => prev + curr.length, 0);
const arr = [
  {
    name: "Schoko",
    price: 1000,
  },
  {
    name: "Milk",
    price: 100000,
  },
  {
    name: "Bread",
    price: 10000,
    date: "2023-10-20",
  },
];

const sum = arr.reduce((prev, curr) => {
  return prev + curr.price;
}, 100);
console.log("SUM: ", sum);

// fs.appendFile("test.txt", "Hello Pinecone FS writer", (err) => {
//   if (err) {
//     console.log("Write Err", err);
//   }

//   console.log("Write Successfully");
// });

console.log("End of File Read");

//
