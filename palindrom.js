'use strict'
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('check-btn')
  const display = document.getElementById('display')
  const palindromeChecker = (string) => {
    const filteredString = string.toLowerCase().split('').filter(char => {
      return (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')
    })
    const reversedString = filteredString.slice().reverse()
    return filteredString.join('') === reversedString.join('')
  }
  const displayResult = () => {
    const word = document.getElementById('word').value
    const result = palindromeChecker(word) ? 'is a palindrome' : 'is not a palindrome'
    display.textContent = `${word} ${result}`
    display.style.fontSize = '2rem'
  }
  btn.addEventListener('click', displayResult)
})
