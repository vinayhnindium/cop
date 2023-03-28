const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('learning', 'postgres','Indium',{
    host: 'localhost',
    dialect: 'postgres',

});
sequelize.authenticate()
.then (()=>{
    console.log('connected');
})
.catch(err=>{
    console.log('error',err)
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;




db.sequelize.sync({force:false /* true if you want to drop table and create new*/  
/* , match:/-test<other database name>$/ this delete old table in the database which ends with -test name  */})
.then(()=>{
    console.log("yes re-synch")
   
// })
// .catch(()=>{
//     console.log("no synch")
})

db.users = require('./users');
db.DTypes =  (sequelize,DataTypes);
console.log("from index db",db.users);
module.exports = db;

