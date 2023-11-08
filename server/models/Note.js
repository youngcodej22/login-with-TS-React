const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const noteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timeStamp: true,
  }
);

//! mongoose 6버전까지는 mongoose-sequence의 충돌이 없었으나 mongoose 7버전부터는 충돌이 생겨, 해당 유저가 github에 직접 코드를 변경하였다. 그래서 나는 node_modules에 mongoose-sequence에 가서 직접 똑같이 코드를 변경하였더니 실행이

//! https://github.com/ramiel/mongoose-sequence/pull/136/commits/9bd05cf578311d83ce70d96097559526f1242f47
//! https://github.com/ramiel/mongoose-sequence/pull/136

noteSchema.plugin(AutoIncrement, {
  inc_field: "ticket",
  id: "ticketNums",
  start_seq: 500,
});

module.exports = mongoose.model("Note", noteSchema);
