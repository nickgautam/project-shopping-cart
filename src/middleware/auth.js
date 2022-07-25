const jwt =require('jsonwebtoken')

exports.auth =async (req,res,next)=>{
  try {
        
        if (!token) return res.status(400).send({ status: false, message: "Token is missing" });
    
        let decodedToken = jwt.verify(token, "group41");
        req.decodedToken = decodedToken.userId;
        next();
      } catch (error) { //hardcoded them
        if (error.message == "jwt expired") return res.status(400).send({ status: false, message: "JWT expired, login again" })
        if (error.message == "invalid signature") return res.status(401).send({ status: false, message: "Token is incorrect" })
        return res.status(500).send({ status: false, error: error.message })
      }
    

    
}