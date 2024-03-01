import{Router} from "express";

const router = Router();

router.route("/get-data").get((req,res) =>{
    return res.status(200).json({
        name:"dschbds",
        document: "lkddnckndies"
    });
});

export default router;