const breakpoints = {
  xs: 320,
  s: 480,
  m: 780,
  l: 1024,
  xl: 1200,
}

const mq = (n) => {
  const breakpointsArray = Object.keys(breakpoints).map((key) => [key, breakpoints[key]])

  const [result] = breakpointsArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media only screen and (max-width: ${size}px)`]

    return acc
  }, [])

  return result
}

export default mq
