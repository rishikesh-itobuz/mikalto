const fs = require("fs");
const http = require("http");
const path = require("path");

const port = 8000;
const filePath = path.join(__dirname, "/formData.txt");
const dataBaseData = fs.readFileSync(path.join(__dirname,'dataBase.json'), 'utf-8');

http.createServer((req, res) => {
    try {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Headers", "*");
      const formData = [];
      req.on("data", (formDataPeices) => {
        formData.push(formDataPeices);
      });
      req.on("end", () => {
        let totalFormData = Buffer.concat(formData).toString();
        fs.appendFileSync(filePath, totalFormData);
      });
      if (req.url === "/") {
        res.write(dataBaseData);
        res.end();
      } else {
        res.write("Oops page not found ");
      }
    } catch (err) {
      console.log(err);
    }
  }).listen(port, () => {
    console.log(`Server is runnig on ${port} `);
  });
