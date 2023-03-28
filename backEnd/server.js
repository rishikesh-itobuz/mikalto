const http = require("http");
const port = 8000;
const path = require("path");
const fs = require("fs");


const filePath = path.join(__dirname + "/dataBase.json");
const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

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
      if (totalFormData.length > 0) {
        (async function () {
          await fs.appendFile("./formData.txt", totalFormData);
        })();
      }
    });
    if(req.url=='/'){
      res.write(JSON.stringify(data));
      res.end();
    }
    
  } catch (err) {
      console.log(err);
    }
  }).listen(port, () => {
    console.log(`Listening to port ${port} `);
  });

  