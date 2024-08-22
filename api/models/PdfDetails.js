const mongoose = require("mongoose");

const PdfDetailsSchema = new mongoose.Schema(
  {
   pdf: String,
    title: String,
   
    teacher: String,
     id_teacher:String,
    category: String,
    status: { type: String, default: "submitted" },
    date: String,
    feedback:String,
    classe:String,
    type_doc:String,
  },
  { collection: "PdfDetails" }
);

mongoose.model("PdfDetails", PdfDetailsSchema);
