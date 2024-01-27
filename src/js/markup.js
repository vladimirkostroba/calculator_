import arrays from "./arrays";
const {numbers,operators,auxiliaryOperators} = arrays;

const blocksRefs = {
    numbers:document.querySelector('.buttons__numbers'),
    operators:document.querySelector('.buttons__operators'),
    auxiliaryOperators:document.querySelector('.buttons__auxiliary-operators'),
  }

createMurkup(numbers,blocksRefs.numbers)
  createMurkup(operators,blocksRefs.operators)
  createMurkup(auxiliaryOperators,blocksRefs.auxiliaryOperators)
  
  const btnZero = document.querySelector("[data-number='0']");
  btnZero.classList.add('button-zero')
  
  
  export function createMurkup (arr,block){
    const markup = arr.map(e => {
      return `<button data-number='${e}' class='button js-button'>${e}</button>`
    }) .join('')
  
    block.insertAdjacentHTML('afterbegin', markup)
  }