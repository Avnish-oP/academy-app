import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: String

});

const Admin = mongoose.model("Admin", adminSchema) || mongoose.models.Admin;

export default Admin;