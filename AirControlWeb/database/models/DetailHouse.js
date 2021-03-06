const detailHouse = {};
const connection = require('../connection');

//QUERIES
const getQuery = 'SELECT * FROM DETAILHOUSE';

/**
Ejecuta el query querySelectHouses en la base de datos
Luego ejecuta el callback que se le pasa en @param callback
**/
detailHouse.getAll = (callback) => {
    if (connection){
      connection.query(getQuery, (err, rows) => {
        //Callback for query
        if(err) {
          throw err;
        } else {
          callback(null, rows);
        }
      });
    }
  }

module.exports = detailHouse;
