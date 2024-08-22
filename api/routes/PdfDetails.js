const express = require("express");
const mongoose = require("mongoose");
const PdfDetails = require("../models/PdfDetails");
const PdfSchema = mongoose.model("PdfDetails");
const pdfRouter = express.Router();

//multer------------------------------------------------------------
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

pdfRouter.post("/upload-files", upload.single("file"), async (req, res) => {
  console.log(req.file);
  const title = req.body.title;
  const fileName = req.file.filename;
  const teacher = req.body.teacher;
  const id_teacher = req.body.id_teacher;
  const category = req.body.category;
  const status = req.body.status;
  const date = req.body.date;
  const feedback=req.body.feedback;
    const classe=req.body.classe;
       const type_doc=req.body.type_doc;
    

  try {
    await PdfSchema.create({
      title: title,
      pdf: fileName,
      teacher: teacher,
      id_teacher: id_teacher,
      category: category,
      status: status,
      date: date,
      feedback:feedback,
      classe:classe,
      type_doc:type_doc,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.json({ status: error });
  }
});

pdfRouter.get("/get-files", async (req, res) => {
  try {
    PdfSchema.find({}).then((data) => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) {}
});
//update user
pdfRouter.put("/:id", async (req, res) => {
  try {
    let result = await PdfSchema.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ pdf: result, msg: "pdf is updated" });
  } catch (error) {
    console.log(error);
  }
});

pdfRouter.delete("/delete-file/:filename", async (req, res) => {
  const filename = req.params.filename;
  try {
    // Delete from the database
    const deletedPdf = await PdfSchema.findOneAndDelete({ pdf: filename });

    // Delete from the file system
    fs.unlink(`./files/${filename}`, (err) => {
      if (err) {
        console.error(err);
        return res.json({ status: "error", message: "Failed to delete file" });
      }
      res.json({ status: "ok", message: "File deleted successfully" });
    });
  } catch (error) {
    res.json({ status: "error", message: "Failed to delete file" });
  }
});
module.exports = pdfRouter;
