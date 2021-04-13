"use strict";

// scope доступность переменных в нашем коде область видимости

// global scope доступен во всех функциях

// local scope определенная область видимости
// видимость переменных идет в глубь функции или сверху вниз
function funcA() {
  let a = 1;

  function funcB() {
    let b = 2;

    function funcC() {
      let c = 3;

      console.log("funcC: ", a, b, c);
    }
    funcC();
    console.log("funcB: ", a, b);
  }
  funcB();
  console.log("funcA: ", a);
}

funcA();
