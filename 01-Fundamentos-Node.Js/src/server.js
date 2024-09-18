// const a = 5;
// const b = 4;

// console.log("Valor de A + B = ", (a + b))

// Aplicações HTTP => APIS
// http.

// Padrões de improtação

//const http = require('node:http')
// CommonJS => require (exemplo acima, por padrão NODE só aceita esse)

import http from 'node:http'
// ESModules => import/export (é o mais comumente usado, para rodar esse, 
// tem que adicionar uma tag no package.json ("type": "module", ))

//                                req    , res
const server = http.createServer((request, response) => {
  return response.end('Server rodando corretamente!')
})

server.listen(3333)

// http localhost:3333
// node --watch .\src\server.js