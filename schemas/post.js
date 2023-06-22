const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    user: {
      type: String,
    },
    password: {
      type: String,
    },
    title: {
      type: String,
    },
    content: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Post", postSchema);
