export const firstLast = (items) => {
  if (items.length === [1])
    return `Only item: bob!`

  if (items.length === 0) {
    return `No items!`
  }

  return `First: ${items[0]}, Last: ${items[1]}`
}
