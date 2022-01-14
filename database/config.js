const mongoose = require('mongoose')

const dbConnection = () => {

    try {

        mongoose.connect( process.env.MONGODB_CNN, { serverSelectionTimeoutMS: 5000 }, (err, res) => {
 
            if (err) throw err;             
            console.log('Base de Datos ONLINE');
        });
        
    } catch (error) {
        console.log(error);
        throw new Error('Erro al iniciar la base de datos')
    }
}


module.exports = {
    dbConnection
}