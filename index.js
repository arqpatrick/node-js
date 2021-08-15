/**
//* MÓDULOS
 */

const calculos = require('./calculos.js') //! importa o módulo do arquivo calculos.js

const resultado = calculos.soma(10, 20)
const resultado2 = calculos.multiplicacao(10, 20)

console.log(resultado)
console.log(resultado2)

// importando com desestructuring

const { soma, multiplicacao } = require('./calculos.js') //! importa o módulo calculos.js como objeto

const resultado3 = multiplicacao(5, 10)

console.log(resultado3)
console.log(soma(5, 3))


/**
 //* FILE SYSTEM - fs
 */

const fs = require('fs') //FileSystem - módulo já existente do node.js

fs.readFile('./clientes.json', function(error, content) { 
  if (error) {
    console.log('Ops, deu erro!', error) // ,error imprime o erro caso ocorra
  } else {
    console.log(JSON.parse(content)) //JSON.parse transforma o buffer em json
  }
}) 
//método do FileSystem
//readdFile(nome_do_arquivo, callback)
//function(erro, conteudo)