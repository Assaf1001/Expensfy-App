const express = require("express");
const path = require("path");

const publicFolder = path.join(__dirname, "../public");

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(publicFolder));

app.get("*", (req, res) => {
    res.sendFile(path.join(publicFolder, "index.html"));
});

app.listen(port, () => {
    console.log("Server is connected, Port:", port);
});
