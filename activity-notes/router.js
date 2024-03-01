
import { Router } from "express";

import * as rh from "./request-handlers/notes.handler.js";
import * as user from "./request-handlers/user.handler.js";

import auth from "./middlewares/auth.js";

const router = Router();

router.route("/register").post(user.register);
router.route("/login").post(user.login);

router.route("/get-data").get(auth, user.getData);
router.route("/get-profile").get(auth, user.getProfile)

export default router;