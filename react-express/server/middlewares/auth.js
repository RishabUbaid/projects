import jwt from "jsonwebtoken";

const { verify } = jwt ;

async function auth(req, res ,next){
    try {
        let token = req.headers.authorization.split(" ")[1];
        let user = await verify(token, process.env.SECRET_KEY);
        console.log(user);
        if (user) {
            req.user = user;
            return next();
        }
        return res.status(401).json({
            msg:"unauthorized access!"
        })
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            msg: "unauthorized access!"
        })
        
    }
}

export default auth;