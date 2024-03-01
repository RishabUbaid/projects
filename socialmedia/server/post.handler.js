import path from "path";

import postModel from "./post.model.js";

export async function upload(req,res){
    try{
        let {filename} = req.file;
        let {des} = req.body;
        if(!filename || !des) {
            return res.status(400).json({
                msg:"fields cannot be empty"
            });
        }
        await postModel.create({
            image:filename,
            des
        });
        return res.status(200).json({
            msg:"post uploaded successfully"
        });
    }catch (error){
        console.log(error);
        return res.status(500).json({
            msg:"post failed"
        });
    }
}

export async function get(req,res){
    try{
      let posts = await postModel.find();
      return res.status(200).json({
        msg:"post fetched successfully",
            posts
      });
   }catch (error){
        console.log(error);
        return res.status(500).json({
            msg:"post failed"
        });
    }
}

export async function image(req,res){
    try{
      let {name} = req.params;
            return res.sendFile(path.resolve(`./post-images/${name}`));
   }catch (error){
        console.log(error);
        return res.status(500).json({
            msg:"post failed"
        });
    }
}
