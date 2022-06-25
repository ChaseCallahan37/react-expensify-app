const path = require("path");
const express = require("express");

const app = express();

const fileName = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;

app.use(express.static(fileName));

app.get("*", (req, res) => {
  res.sendFile(path.join(fileName, "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
