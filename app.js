const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3000;
const postsRouter = require("./routes/posts.route");
const routes = require("./routes");
const connect = require("./schemas");
connect();

app.use(express.json());
app.use(cookieParser());

app.use("/login", routes);
app.use("/api", [postsRouter]);

app.listen(port, () => {
  console.log(port, "서버가 실행되었습니다.");
});
