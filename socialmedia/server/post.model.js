import { Schema , model } from "mongoose";


const schema = new Schema({
   

    image:{
        type:String
    },

    des:{
        type:String
    }

})

export default model.Posts || model("post",schema);