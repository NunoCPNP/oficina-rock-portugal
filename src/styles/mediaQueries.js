const bp = {
  xs: 320,
  s: 480,
  m: 780,
  l: 1024,
  xl: 1200,
}

const mq = (n) => {
  const bpArray = Object.keys(bp).map((key) => [key, bp[key]])

  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media only screen and (max-width: ${size}px)`]
    return acc
  }, [])

  return result
}

export default mq
