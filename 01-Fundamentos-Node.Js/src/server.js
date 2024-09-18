import http from 'node:http'

const server = http.createServer((request, response) => {
  const { method, url } = request

  //console.log(method, url)
  if (method === 'GET' && url === '/users') {
    return response.end('Listagem de usuário')
  } 

  if (method === 'PUT' && url === '/users') {
    return response.end('Alteração completa de usuário')
  }

  if (method === 'POST' && url === '/users') {
    return response.end('Inserido usuário')
  }

  if (method === 'PATCH' && url === '/users') {
    return response.end('Alteração parcial de usuário')
  }

  if (method === 'DELETE' && url === '/users') {
    return response.end('Exclusão de usuário')
  }

  return response.end('Server rodando corretamente!')
})

server.listen(3333)