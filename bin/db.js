const mongoose = require("mongoose") // new

const username = "<hridhin";
const password = "hridhin567";
const cluster = "@cluster0.l4rblyh";
const dbname = "test";

mongoose.connect(
    `mongodb+srv://hridhin:hridhin567@cluster0.l4rblyh.mongodb.net/?retryWrites=true&w=majority`

);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});










