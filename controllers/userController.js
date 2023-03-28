var db = require('../models/index.js');
console.log("from usrctrl db",db.users)
const Users = db.users;
var addUser = async function (req,res) {

    let data = await Users.create({name:'test', email:'vinay@gmail.com', gender: 'male'});
    // console.log('data',data);
    // await data.save();   
    // let data = await User.create({name:'vinay',email:"xyz@gmail.com", gender:'male'})
    // console.log("hellooii")
    
     res.status(200).json(
        { 
            data:"ok"
        }
     );
}

module.exports = {addUser};