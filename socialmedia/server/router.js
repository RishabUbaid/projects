import { Router } from "express";
import multer from "multer";

import { upload, get, image  } from "./post.handler.js";
import { register ,login } from "./user.handler.js";
 

const storage = multer.diskStorage({
    destination: "./post-images",
    filename: (req, file, cb) => {
        let date = new Date();
        let name = `${date.getFullYear()}-${date.getMonth}-${date.getDate}-${date.getHours}-${date.getMinutes}`;
        cb(null, `${name}-${file.originalname}`);
    }
});
const uploader = multer({ storage });

const router = Router();


router.route("/register").post(register);
router.route("/login").post(login);
router.route("/upload").post(uploader.single("image"), upload);
router.route("/get").get(get);
router.route("/image/:name").get(image);

export default router;

