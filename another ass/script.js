const express = require("express");
const fs = require("fs");
const path = require("path");

const filesDir = "C:\\Users\\USER\\Desktop\\web dev\\another ass\\filessiri";

const app = express();

app.get("/files/:filename", function(req, res) {
    const { filename } = req.params;
    const filepath = path.join(filesDir, filename);
    console.log(filepath);

    fs.readFile(filepath, "utf-8", (err, fileContent) => {
        if (err) {
            console.log("file not found");
            res.status(404).send("File not found");
        } else {
            res.status(200).json(fileContent);
        }
    });
});

app.use((req, res) => {
    res.status(404).send("404 - Not Found");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
