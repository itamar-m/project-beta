
const _ = require('lodash');
const mysql = require('promise-mysql');

const getConnection = () => mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'x3po',
  database: 'alpha'
});

console.log("Handlers module\n");

exports.rootHandler = (request, response) => {

    return getConnection().then((connection) => {
        let selectQuery = connection.query('select message from display');

        return selectQuery.then((display) => {
          connection.end();
          const output = _.sample(display);

          response.write ( output.message + ", how do you do today?");
          response.end();
        });
    });
};

exports.aboutHandler = (request, response) => {

  response.write ("About HTTP.");
  response.end();
};

exports.notFoundHandler = (request, response) => {

  response.write ("404 HTTP.");
  response.end();
};
