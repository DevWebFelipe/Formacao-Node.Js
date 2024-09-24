// Regex -> basicamente, substitui parametros
// /users/:id
export function buildRoutePath(path) {
  // : -> Vai procurar depois dos :
  // [a-zA-Z] -> Vai identificar todas as letras maiusculas e minusculas
  // + -> Pode ter 1 ou mais letras
  // g -> Indica que procurará por mais de 1 parâmetro

  const routeParametersRegex = /:([a-zA-Z]+)/g

  console.log(Array.from(path.matchAll(routeParametersRegex)))
}