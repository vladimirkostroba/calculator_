import './js/markup'
import  arrays  from "./js/arrays"
const {numbers,operators} = arrays;

  // ////////////// ЛОГИКА 
  
  let a = '';
  let b = '';
  let sign = '';
  let result = 0;
  
  const buttonsRef = document.querySelector('.js-buttons');
  const outputRef = document.querySelector('.output');
  const alternativeOutputRef = document.querySelector('.alternative-output');
  
  buttonsRef.addEventListener('click', calculator);
  
  // ////////////////////////////////////////
  
  function calculator(e){
    const value = e.target.dataset.number;
    
     if(e.target.nodeName !== 'BUTTON'){
     }
  
     if(a.length >= 11 || b.length >= 11){
      return
     }
  
     if(b === '' && sign === '' && numbers.includes(value)){
      a += value
     }
  
     if(a !== '' && sign === '' && value === '+/-'){
      changeSign()
     }
  
     if(a !== '' && b === '' && operators.includes(value) || value === '%'){
      sign = value === '='? '' : value;
     }
  
     if(a !== '' && sign !== '' && numbers.includes(value)){
      b += value
     }
  
     if(a !== '' &&  b !== '' && sign !== ''){
      clculateHandler(Number(a),Number(b),sign)
      alternativeOutputRef.textContent = result;
     }
  
     if(a !== '' &&  b !== '' && sign !== '' && operators.includes(value)){
      clculateHandler(Number(a),Number(b),sign)
      
      a = makeA(result)
      b = ''
      sign = value === '=' ? '' : value;
      if(sign === ''){
        alternativeOutputRef.textContent = ''
      }
      result = 0;
     }
  
     if(value === 'AC'){
      clearHandler()
     }
     outputRef.textContent = `${a} ${sign} ${b}`
     if(outputRef.textContent.length > 12){
      outputRef.classList.add('longOutputStyle')
     }
  
     console.log(sign);
    }
  
    // замена знака числа
  
    function changeSign(){
      if(Math.sign(a) === 1 || Math.sign(a) === 0){
        a = -a
        return
      }
  
      if(Math.sign(a) === -1 || Math.sign(a) === -0){
        a = Math.abs(a)
        return
      }
    }
  
    // ///////////////////////////////////////////////
  
      // подсчет результата
  
      function clculateHandler(a,b,sign){  
        switch(sign){
         case '+':
           result = a+b;
           break;
         case '-':
           result = a-b;
           break;
         case 'x':
           result = a*b;
           break;
         case '÷':
           result = a/b;
           break;
         case '%':
          result = b / 100 * a
         default: return
        }
   }
  
    // очистка 
  
    function clearHandler(){
      a = ''
      b = ''
      sign = ''
    }
  
    // округление результата
  
    function makeA(num){
       if(num.toString().length > 5 && !Number.isInteger(num)){
        num = num.toFixed(3)
       }
       return num.toString()
    }
  
