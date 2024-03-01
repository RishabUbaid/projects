import mongoose from "mongoose";
   const schema = new mongoose.Schema({
    username: {
        type: String
    },

    email: {
        type: String
    },

    password: {
        type: String
    }
   });


   export default mongoose.model.logins || mongoose.model("login",schema);