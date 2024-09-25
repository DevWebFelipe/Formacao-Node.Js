import http from 'node:http'
import { json } from './middlewares/json.js'
import { routes } from './routes.js'

// Query Parameters: Usado em URL Stateful => Filtros, paginação....
// Ex: http://localhost:3333/users?userId=2&name=Felipe

// Route Parameters: Identificação de recurso
// Ex: http://localhost:3333/users/1

// Rquest Body: Envio de dados sensíveis, dados de formulários (HTTPS1)
// Ex: http://localhost:3333/users
//     {
//        "name":"Giulia Gabrielle",
//        "email":"giulia@gmail.com.br"
//     }

const server = http.createServer(async (request, response) => {
  const { method, url } = request

  await json(request, response)

  const route = routes.find(route => {
    return route.method === method && route.path.test(url)
  })

  if (route) {
    const routeParams = request.url.match(route.path)

    request.params = { ...routeParams.groups }

    return route.handler(request, response)
  }
  
  return response.writeHead(404).end()
})

server.listen(3333)