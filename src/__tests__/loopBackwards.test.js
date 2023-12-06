import { loopBackwards } from '../loopBackwards.js'
import { describe, test, expect } from '@jest/globals'


describe('loopBackwards()', () => {
  describe('works correctly with array of', () => {
    test('strings', () => {
      const strings = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

      loopBackwards(strings, (value, splice, index) => {
        if (value === '3') splice()
        else if (index === 5) splice()
        else if (value === '9') splice()
      })

      expect(strings).toEqual(['1', '2', '4', '5', '7', '8'])
    })


    test('numbers', () => {
      const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

      loopBackwards(numbers, (number, splice, index) => {
        if (number === 3) splice()
        else if (index === 5) splice()
        else if (number === 9) splice()
      })

      expect(numbers).toEqual([1, 2, 4, 5, 7, 8])
    })


    test('objects', () => {
      const objects = [
        { foo: 1 },
        { foo: 2 },
        { foo: 3 },
        { foo: 4 },
        { foo: 5 },
        { foo: 6 },
      ]

      loopBackwards(objects, ({ foo }, splice, index) => {
        if (foo === 3) splice()
        else if (index === 5) splice()
        else if (index === 1) splice()
      })

      expect(objects).toEqual([
        { foo: 1 },
        { foo: 4 },
        { foo: 5 },
      ])
    })


    test('dom elements', () => {
      document.body.innerHTML = '<div id="1"></div><div id="2"></div><span id="3"></span><div id="4"></div><div id="5"></div><span id="6"></span><div id="7"></div><div id="8"></div><span id="9"></span>'

      const domElements = document.querySelectorAll('div')
      const arrayElements = Array.from(domElements)

      loopBackwards(arrayElements, (element, splice) => {
        const id = element.getAttribute('id')
        if (id === '3' || id === '1' || id === '5' || id === '7') splice()
      })

      expect(document.body.innerHTML).toEqual('<div id="2"></div><span id="3"></span><div id="4"></div><span id="6"></span><div id="8"></div><span id="9"></span>')
    })
  })
})
