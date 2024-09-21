import http from 'node:http'
//    https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
const users = []

const server = http.createServer(async (request, response) => {
  const { method, url } = request

  const buffers = []

  for await (const chunk of request) {
    buffers.push(chunk)
  }

  try {
    request.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch {
    request.body = null
  }

  console.log(request.body)

  if (method === 'GET' && url === '/users') {
    return response
      .setHeader('Content-type', 'application/json')
      .end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {
    const { name, email } = request.body

    users.push({
      id: 1,
      name,
      email,
    })

     users.push({
       id: 2,
       nome: 'Felipe Teixeira',
       email: 'felipe.flptxr@gmail.com'
     })

    return response.writeHead(201).end()
  }

  return response.writeHead(404).end()
})

server.listen(3333)