const express = require("express");
const getSpreadSheet = require("./getSpreadSheet");

const app = express();
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

app.get("/", (req, res) => {
  const spreadsheet = getSpreadSheet();
  res.send(JSON.stringify(spreadsheet));
});

app.get("/about", (req, res) => {
  res.send("This is my about route..... ");
});

// Export the Express API
module.exports = app;
