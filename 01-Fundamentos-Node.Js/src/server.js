import http from 'node:http'

const users = []

const server = http.createServer((request, response) => {
  const { method, url } = request

  console.log(request.headers)

  if (method === 'GET' && url === '/users') {
    return response
      .setHeader('Content-type', 'application/json')
      .end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      nome: 'Felipe Teixeira',
      email: 'felipe.flptxr@gmail.com'
    })

    return response.end('Usuário inserido com sucesso')
  }

  return response.end('Server rodando corretamente!')
})

server.listen(3333)