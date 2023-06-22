const express = require("express");
const router = express.Router();
const postsRouter = require("./posts");
const commentsRouter = require("./comments");
const userRouter = require("./users");
const authRouter = require("./auth.js");

const defaultRoutes = [
  {
    path: "/post",
    route: postsRouter,
  },
  {
    path: "/comment",
    route: commentsRouter,
  },
  {
    path: "/users",
    route: userRouter,
  },
  {
    path: "/auth",
    route: authRouter,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
