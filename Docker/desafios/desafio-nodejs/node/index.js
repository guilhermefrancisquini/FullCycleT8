const express = require('express')
const app = express()
const port = 3000

const getRandomString = require("./app");
const db = require("./app/db.js");

app.get('/', async (req,res) => {
    res.setHeader('Content-type', 'text/html');
    let html = `<h1>Full Cycle Rocks!</h1><div>`

    await db.insertPeople(getRandomString())
    const peoples = await db.getPeoples()
    
    html += "<ul>"
    peoples.forEach(element => {
        html += `<li>${element.name}</li>`;
    });
    html += "</ul></div>"

    res.end(html);
})

//connection.end()

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})

