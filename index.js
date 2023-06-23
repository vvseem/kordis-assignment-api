const express = require("express");
const getSpreadSheetData = require("./getSpreadSheetData");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

app.get("/", (req, res) => {
  const spreadsheet = getSpreadSheetData();
  res.send(JSON.stringify(spreadsheet));
});

// Export the Express API
module.exports = app;
