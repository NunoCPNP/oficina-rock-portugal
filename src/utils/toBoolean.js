export const toBoolean = (string) => {
  if (typeof string === Boolean) return string

  if (string === 'true') {
    return true
  } else if (string === 'false') {
    return false
  } else {
    return false
  }
}
