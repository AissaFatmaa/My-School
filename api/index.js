const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db_connect");
const app = express();
require("dotenv").config();

// connect to DB
connectDB();

// routes
app.use(express.json());
app.use(cors());
// app.use(cors({
//   origin:["https://myschoolnew.vercel.app/"],
//   methods:["POST","GET"],
//   credentials:true
// }));
app.use("/user", require("./routes/user"));
app.use("/event", require("./routes/event"));
app.use("/club", require("./routes/club"));
app.use("/files", express.static("files"));
app.use("/PdfFile", require("./routes/PdfDetails"));

//server
app.get("/", (req, res) => res.send("Express on Vercel"));
const PORT = process.env.PORT;
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log("server is running")
);
