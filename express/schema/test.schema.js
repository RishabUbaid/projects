import mongoose from "mongoose";

const schema = new mongoose.Schema({
   text:{
    type:String
   },
   decription: {
    type:String
   }


});

export default mongoose.model.Texts || mongoose.model("Text",schema);