const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

// ! https://github.com/Automattic/mongoose/issues/13502
// const connectDB = class {
//   connect = async () => {
//     let connection = await mongoose.connect("mongodb://localhost:27017/db", {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     return connection;
//   };
//   disconnect = async () => {
//     let res = await mongoose.disconnect();
//     return res;
//   };
// };

module.exports = connectDB;
