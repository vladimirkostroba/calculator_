var t={numbers:["1","2","3","4","5","6","7","8","9","0","."],operators:["÷","x","+","-","="],auxiliaryOperators:["AC","+/-","%"]};const{numbers:e,operators:r,auxiliaryOperators:n}=t,o={numbers:document.querySelector(".buttons__numbers"),operators:document.querySelector(".buttons__operators"),auxiliaryOperators:document.querySelector(".buttons__auxiliary-operators")};u(e,o.numbers),u(r,o.operators),u(n,o.auxiliaryOperators);function u(t,e){const r=t.map((t=>`<button data-number='${t}' class='button js-button'>${t}</button>`)).join("");e.insertAdjacentHTML("afterbegin",r)}document.querySelector("[data-number='0']").classList.add("button-zero");const{numbers:a,operators:s}=t;let c="",i="",l="",b=0;const d=document.querySelector(".js-buttons"),m=document.querySelector(".output"),g=document.querySelector(".alternative-output");function p(t,e,r){switch(r){case"+":b=t+e;break;case"-":b=t-e;break;case"x":b=t*e;break;case"÷":b=t/e;break;case"%":b=e/100*t;default:return}}d.addEventListener("click",(function(t){const e=t.target.dataset.number;if(t.target.nodeName,c.length>=11||i.length>=11)return;""===i&&""===l&&a.includes(e)&&(c+=e);""!==c&&""===l&&"+/-"===e&&function(){if(1===Math.sign(c)||0===Math.sign(c))return void(c=-c);if(-1===Math.sign(c)||-0===Math.sign(c))c=Math.abs(c)}();(""!==c&&""===i&&s.includes(e)||"%"===e)&&(l="="===e?"":e);""!==c&&""!==l&&a.includes(e)&&(i+=e);""!==c&&""!==i&&""!==l&&(p(Number(c),Number(i),l),g.textContent=b);""!==c&&""!==i&&""!==l&&s.includes(e)&&(p(Number(c),Number(i),l),c=function(t){t.toString().length>5&&!Number.isInteger(t)&&(t=t.toFixed(3));return t.toString()}(b),i="",l="="===e?"":e,""===l&&(g.textContent=""),b=0);"AC"===e&&(c="",i="",l="");m.textContent=`${c} ${l} ${i}`,m.textContent.length>12&&m.classList.add("longOutputStyle");console.log(l)}));
//# sourceMappingURL=index.9d917668.js.map
