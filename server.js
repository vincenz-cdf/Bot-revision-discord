const express = require("express")

const server = express()

server.all("/", (req,res) => {
  res.send(
    "<h1>Vincent le PD<h1>")
})

function Demarrer(){
  server.listen(3000, () => {
    console.log("Démarrage du serv")
  })
}

module.exports = Demarrer