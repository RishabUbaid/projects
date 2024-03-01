import mongoose from "mongoose";


const schema = new mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    profile:{
        type: String
    },
    tel: {
        type:String
    },

    password: {
        type: String
    }
});

export default mongoose.model.Logins || mongoose.model("Login", schema);