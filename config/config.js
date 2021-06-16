require('dotenv').config(); // this is important!
module.exports = {
    
"development": {
    "username": "root" || process.env.DBUsername,
    "password": "" || process.env.DBPassword,
    "database": "" || process.env.DBName,
    "host": "127.0.0.1" || process.env.DBHost,
    "port": 5432 || process.env.DBPort,
    "dialect": "postgres",
    // Use a different storage. Default: none
    "seederStorage": "json",
    // Use a different file name. Default: sequelize-data.json
    "seederStoragePath": "sequelizeData.json",
    // Use a different table name. Default: SequelizeData
    "seederStorageTableName": "sequelize_data"
},
"test": {
    "username": "root" || process.env.DBUsername,
    "password": "" || process.env.DBPassword,
    "database": "touch-core" || process.env.DBName,
    "host": "127.0.0.1" || process.env.DBHost,
    "port": 5432 || process.env.DBPort,
    "dialect": "postgres",
    // Use a different storage. Default: none
    "seederStorage": "json",
    // Use a different file name. Default: sequelize-data.json
    "seederStoragePath": "sequelizeData.json",
    // Use a different table name. Default: SequelizeData
    "seederStorageTableName": "sequelize_data"
},
"production": {
    "username": "root" || process.env.DBUsername,
    "password": "" || process.env.DBPassword,
    "database": "touch-core" || process.env.DBName,
    "host": "127.0.0.1" || process.env.DBHost,
    "port": 5432 || process.env.DBPort,
    "dialect": "postgres",
    // Use a different storage. Default: none
    "seederStorage": "json",
    // Use a different file name. Default: sequelize-data.json
    "seederStoragePath": "sequelizeData.json",
    // Use a different table name. Default: SequelizeData
    "seederStorageTableName": "sequelize_data"
}
};

