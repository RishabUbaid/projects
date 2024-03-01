// import { Router } from "express";

// import  * as th from "./request-handlers/todo.handler.js";

// const router = Router();

import { Router } from "express";

import * as rh from "./request-handlers/todo.handler.js";
import * as user from "./request-handlers/user.handler.js";
import * as mh from "./request-handlers/multer.handler.js";

import multer from "multer";
import path from "path";

import auth from "./middlewares/auth.js";




const storage = multer.diskStorage({
    destination:"./files",
    filename: (req,file , cb)=>{
        console.log(file);
        cb(null, file.originalname);
    }
});
const uploader = multer({storage});

const router = Router();

router.route("/register").post(user.register);
router.route("/login").post(user.login);

router.route("/get-data").get(auth, user.getData);
router.route("/get-profile").get(auth, user.getProfile);

router.route("/upload-file").post(uploader.single("image"), mh.multerFile);
router.route("/get-file").get(mh.getFile);
router.route("/image/:name").get((req, res) => {
    let { name } = req.params;
    console.log(name);
    return res.sendFile(path.resolve(`./files/${name}`));
})

export default router;