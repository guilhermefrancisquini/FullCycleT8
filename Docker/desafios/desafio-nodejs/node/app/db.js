const mysql = require('mysql')

const connect = () =>{
    const config = {
        host: 'db',
        user: 'root',
        password: 'root',
        database:'nodedb'
    };    
    const connection  = mysql.createConnection(config)
    connection .query('CREATE TABLE IF NOT EXISTS people (id int(11) not null auto_increment,name varchar(255),primary key(id))')

    return connection
}

const getPeoples = () => {
    const conn = connect();
    return new Promise(function(resolve, reject) {
        conn.query(`SELECT id, name FROM people`, (err, rows) => {                                                
            if(rows === undefined){
                reject(new Error(`Error rows is undefined - ${err}`));
            } else {
                resolve(rows);
            }
        }
    )}
)}

const insertPeople = (name) => {
    const conn = connect()
    return new Promise(function(resolve, reject) {
        conn.query(`INSERT INTO people(name) values(?)`, name, (err, result) => {                                                
            if(result === undefined) {
                reject(new Error(`Error rows is undefined - ${err}`))
            } else {
                resolve("1 record inserted")
            }
        }
    )}
)}

module.exports = {connect, getPeoples, insertPeople}