const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const User = require("../schemas/users");

// 로그인 API
router.post("/auth", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user || password !== user.password) {
    res.status(400).json({
      errorMessage: "이메일 또는 패스워드가 틀렸습니다.",
    });
    return;
  }

  // users 스키마에 userId정보가 없어서 DB의 _id정보를 가져와서 비교한다.
  const token = jwt.sign({ userId: user._id }, "customized-secret-key");

  res.cookie("Authorization", `Bearer ${token}`);
  res.status(200).json({ token });
});

module.exports = router;
