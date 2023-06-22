const express = require("express");
const postsRouter = require("./routes/posts.route");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3000;
// const connect = require("./schemas");

app.use(express.json());
app.use(cookieParser());

// app.use("/api", routes);
app.use("/api", [postsRouter]);

app.listen(port, () => {
  console.log(port, "서버가 실행되었습니다.");
});
