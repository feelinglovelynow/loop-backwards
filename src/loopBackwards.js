/**
 * Loop an array backwards! Give loopBackwards() an array and a callback. Calback provides the current item, a splice function, and the current index. Splice function removes item from the array. If the splice function is called & the current item is a DOM element the item is removed from the array & the item is removed from the DOM
 * @param { any[] } list 
 * @param { (item: any, splice: () => void, index: number) => void } callback 
 * @returns void
 */
export function loopBackwards (list, callback) {
  const LIST_LENGTH_MINUS_ONE = list.length - 1

  for (let index = LIST_LENGTH_MINUS_ONE; index >= 0; index--) {
    callback(
      list[index],
      () => {
        if (list[index]?.constructor?.name?.startsWith('HTML')) list[index].remove()
        list.splice(index, 1)
      },
      index
    )
  }
}
