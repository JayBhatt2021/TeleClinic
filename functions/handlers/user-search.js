const {database} = require("../util/admin");
const Joi = require('joi');
const Fuse = require('fuse.js');

const searchParameterSchema = Joi.object({
    searchParameter: Joi.string().required()
});

// Search for a user by name
// REQ: searchParameter: The string to search for
// RES: uId: user Id of user, fullName: full name of user
exports.userSearch = (req, res) => {
    let usersInfoArr = [];
    const user = req.user;
    const searchParameter = req.body.searchParameter;

    const validation = searchParameterSchema.validate(req.body);
    if(validation.error) {
        let err = validation.error.details[0].message;
        return res.status(400).send({message: err});
    }

    function storeUserInfo(userInfo) {
        usersInfoArr.push(userInfo);
    }

    function sendResults(res, results) {
        res.send(results);
    }

    let userInfoRef = database.collection("usersInfo");
    userInfoRef.get().then(function(snapshot) {
        snapshot.forEach(function (doc) {
            if(doc.id !== user.uid) {
                let userInfo = {
                    uId: doc.id,
                    fullName: doc.data().fullName
                };
                storeUserInfo(userInfo);
            }
        })
    }).then(()=> {
        let options = {
            keys: ['fullName']
        };
        let fuse = new Fuse(usersInfoArr, options);
        let result = fuse.search(searchParameter);
        sendResults(res, result);
    })
};
