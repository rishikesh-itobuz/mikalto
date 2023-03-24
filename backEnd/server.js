const http = require("http");
const port = 8000;
const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname + "/dataBase.json");
const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

http.createServer((req, res) => {
    try {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.write(JSON.stringify(data));
      res.end();
    } catch (err) {
      console.log(err);
    }
  }).listen(port, () => {
    console.log(`Listening to port ${port} `);
  });