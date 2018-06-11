export const appendClass = (...classes) => classes.join(' ').trim()

export const localStorageOr = (identity, localStorageItem) => {
  const item = window.localStorage.getItem(localStorageItem)
  return item
    ? JSON.parse(item)
    : identity
}
