module.exports = (sequelize,DataTypes) =>{
    const users = sequelize.define ("users",{
        name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING /* can use DataTypes.<other datatypes like INTEGER, TEXT, VARCHAR, etc>*/,
            default: 'test@gmail.com'
        },
        gender:{
            type: DataTypes.STRING  
        } 
     }
    ,{ 
    //  // if you dont want any columns do this
      updatedAt:false,
      createdAt:false

    // //to rename default columns
    //  //   updatedAt:'updated_at',
    // //   createdAt:'created_at'

    // // to change engine
    // // engine:'MYISAM'
    
    // // to change table name
    // // tableName: <new table name>


    }
    );
}