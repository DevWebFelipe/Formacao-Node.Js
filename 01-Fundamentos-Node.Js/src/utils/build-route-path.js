// Regex -> basicamente, substitui parametros
// /users/:id
export function buildRoutePath(path) {
  // : -> Vai procurar depois dos :
  // [a-zA-Z] -> Vai identificar todas as letras maiusculas e minusculas
  // + -> Pode ter 1 ou mais letras
  // g -> Indica que procurará por mais de 1 parâmetro

  const routeParametersRegex = /:([a-zA-Z]+)/g
  const pathWithParams = path.replaceAll(routeParametersRegex, '(?<id>[a-z0-9\-_]+)')

  const pathRegex = new RegExp(`^${pathWithParams}`)

  return pathRegex
}