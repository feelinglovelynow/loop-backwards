# 🕉 @feelinglovelynow/loop-backwards


## 💎 Install
```bash
pnpm add @feelinglovelynow/loop-backwards
```


## 🙏 Description
Loop an array backwards! Give loopBackwards() an array and a callback. Calback provides the current item, a splice function, and the current index. Splice function removes item from the array. If the splice function is called & the current item is a DOM element the item is removed from the array & the item is removed from the DOM


## 💚 Example: Array of numbers
```ts
import loopBackwards from '@feelinglovelynow/loop-backwards'

loopBackwards(numbers, (number, splice, index) => {
  if (number === 9 || index === 9) splice()
})
```


## 💛 Example: Array of objects
```ts
loopBackwards(items, ({ foo }, splice) => {
  if (foo === 'bar') splice()
})
```


## 🧡 Example: Array of DOM elements
```ts
const domElements = document.querySelectorAll('div')
const arrayElements = Array.from(domElements)

loopBackwards(arrayElements, (element, splice) => {
  if (element.getAttribute('foo') === 'bar') splice()
})
```


## 🎁 All our NPM Packages
* [@feelinglovelynow/env-write](https://github.com/feelinglovelynow/env-write)
* [@feelinglovelynow/get-form-entries](https://github.com/feelinglovelynow/get-form-entries)
* [@feelinglovelynow/get-relative-time](https://github.com/feelinglovelynow/get-relative-time)
* [@feelinglovelynow/global-style](https://github.com/feelinglovelynow/global-style)
* [@feelinglovelynow/jwt](https://github.com/feelinglovelynow/jwt)
* [@feelinglovelynow/loop-backwards](https://github.com/feelinglovelynow/loop-backwards)
* [@feelinglovelynow/slug](https://github.com/feelinglovelynow/slug)
* [@feelinglovelynow/svelte-loading-anchor](https://github.com/feelinglovelynow/svelte-loading-anchor)
* [@feelinglovelynow/svelte-modal](https://github.com/feelinglovelynow/svelte-modal)
* [@feelinglovelynow/svelte-turnstile](https://github.com/feelinglovelynow/svelte-turnstile)
* [@feelinglovelynow/toast](https://github.com/feelinglovelynow/toast)
