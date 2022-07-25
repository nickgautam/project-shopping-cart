const jwt = require('jsonwebtoken')

exports.auth = async (req, res, next) => {
    try {
        let token = req.headers['authorization'];
        if (!token) return res.status(400).send({ status: false, message: "Token is missing" });
        token = token.split(" ")
        let decodedToken = jwt.verify(token[1], "my@fifth@project@product@management", function (err, data) {
            if (err) return null
            else {return data}
        });
        if(!decodedToken) return res.status(401).send({ status: false, message: "Token is invalid" });
        // console.log(decodedToken)
        req.userId = decodedToken.userId;
        next();
    } catch (error) { //hardcoded them
        return res.status(500).send({ status: false, error: error.message })
    }



}