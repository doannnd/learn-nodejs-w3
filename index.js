const fs = require("fs");
const path = require("path");

fs.writeFile(
  path.join(__dirname, "/test2", "Hello.txt"),
  "Hello Nodejs",
  (err) => {
      if (err) throw err;
      console.log('create file');
  }
);
