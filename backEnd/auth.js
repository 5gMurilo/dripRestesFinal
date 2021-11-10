const jwt = require('jsonwebtoken');
const { promisify } = require('util');

async function validate(req, res, next) { 
    const { authoriztion } = req.headers; 
    
    if(!authoriztion){
        return res.sendStatus(401);
    }

    const [, token] = authoriztion.split(' ');

    try{
        await promisify(jwt.verify)(token, 'PRIVATEKEY');

        return next();
    }catch(err) {
        return res.sendStatus(401)
    }
}

module.exports = validate;