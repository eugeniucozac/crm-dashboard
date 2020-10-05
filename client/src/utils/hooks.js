export const objectInArray = (array, findIndex, updated) => {
  return array.map((item, index) => {
    if (index !== findIndex) {
      return item
    }
    return {
      ...item,
      ...updated,
    }
  })
}
