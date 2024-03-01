import mongoose from "mongoose";

const schema = new mongoose.Schema({
  filename: {
    type: String
  },
  username: {
    type: String
  },
  email: {
    type: String
  }



});
export default mongoose.model.Multers || mongoose.model("multer",schema);