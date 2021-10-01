export const toBoolean = (value) => {
  if (typeof value === 'boolean') return value

  if (value === 'true') {
    return true
  } else if (value === 'false') {
    return false
  } else {
    return false
  }
}
