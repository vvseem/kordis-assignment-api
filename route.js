import express from "express";
import getSpreadSheet from "./getSpreadSheet.js";

export const router = express.Router();

router.get("/spreadsheet", (req, res) => {
  const spreadsheet = getSpreadSheet();
  res.status(200).json(spreadsheet);
});
