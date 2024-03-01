import { Router } from "express";

import  * as th from "./request-handlers/todo.handler.js";

const router = Router();

router.route("/add-todo").post(th.addTodo);
router.route("/get-todo").get(th.getTodo);
router.route("/update-todo").put(th.updateTodo);
router.route("/delete-todo").delete(th.deleteTodo);

export default router;