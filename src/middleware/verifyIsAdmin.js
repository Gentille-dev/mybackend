import e from "express";
import jwt from "jsonwebtoken";


const verifyIsAdmin = (req,res,next) => {

// check if the request has an authorization header
const authHeader = req.headers.authorization

// condition
if(!authHeader){
res.status(401).json({
    message: ("No token provided")
})
} else {
    // get token 

    const token = authHeader.split(" ") [1];
    console.log(token)

    try {
         // condition to verify token

         const verifiedUser = jwt.verify(token, process.env.SECRET, {expiresIn: '1d'})
        
         // { isAdmin: true, iat: 1678522948, exp: 1678609348 }

         if(!verifiedUser.isAdmin) {
            return res.status(401).json({
                message: "user not authorized"
            });
        } 
        next()

    } catch (error) {
        res.status(500).json ({
            message: error.message
        });
        
    } 

} 
};
 

export default verifyIsAdmin; 