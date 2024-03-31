import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    pdflink:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    class:{
        type: String,
        required: true
    },
    subject:{
        type: String,
        required: true
    },
 }
    
);

const Note = mongoose.model("Note", noteSchema) || mongoose.models.Note;

export default Note;