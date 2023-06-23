// import cors from "cors";
// import express from "express";
// import { router } from "./route.js";
//
// const PORT = 4000;
// export const app = express();
//
// app.use(cors());
// app.use(express.json());
//
// // app.use("/api", router);
//
// app.get("/", (req, res) => {
//   res.send("Hey this is my API running 🥳");
// });
//
// app.listen(PORT, () => {
//   console.log(`API listening on PORT ${PORT}`);
// });

const express = require("express");
const getSpreadSheet = require("./getSpreadSheet");

const app = express();
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

app.get("/", (req, res) => {
  const spreadsheet = getSpreadSheet();
  res.status(200).json(spreadsheet);
});

app.get("/about", (req, res) => {
  res.send("This is my about route..... ");
});

// Export the Express API
module.exports = app;
