import cors from "cors";
import logger from "morgan";
import express from "express";
import { router } from "./route.js";

const PORT = 4000;
export const app = express();

app.use(cors());
app.use(express.json());
app.use(logger("dev"));

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Hey this is my API running 🥳");
});

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT}`);
});
