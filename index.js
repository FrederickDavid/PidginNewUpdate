const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./utils/db");
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/pidgin", require("./router/userRouter"));
app.use("/pidgin/post", require("./router/postRouter"));
app.use("/pidgin/like", require("./router/likeRouter"));
app.use("/pidgin/definition", require("./router/definitionRouter"));
app.use("/pidgin/bio", require("./router/bioRouter"));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "New Api Created Successfully",
  });
});

app.listen(port, (req, res) => {
  console.log(`App is now listening on PORT: ${port}`);
});
