const express = require("express");
const connectDB = require("../configdb/db");
const cors = require("cors");
const router = require("./routers/index");
const app = express();

connectDB();

const middleware = (app) => {
  app.use(express.json());
  app.use(cors({ origin: "*" }));
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Cross-Origin-Resource-Policy", "cross-origin");
    next();
  });
};
middleware(app);
app.use("/api/v1", router);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
