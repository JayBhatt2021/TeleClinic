const {admin} = require('./admin');

// Middleware to authenticate users
module.exports = (req, res, next) =>
{
    let idToken;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer '))
    {
        idToken = req.headers.authorization.split('Bearer ')[1];
    }
    else
    {
        return res.status(403).send({message:"Forbidden"})
    }
    admin.auth().verifyIdToken(idToken)
        .then(decodedToken =>
        {
            req.user = decodedToken;
            return next()
        })
        .catch(err =>
        {
            console.error('Error while verifying token, ' + err);
            return res.status(403).send({message:"Error while verifying token"})
        })
};
