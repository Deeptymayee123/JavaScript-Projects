/*
javaScript execution control:

js code--make global execution control then,
1: Global Ec
2: Function Ec
3: Eval Ec

js code-- memory creation phase
        --execution phase
*/
//code:
let var1 = 10;
let var2 = 5;
function addTwo(n1, n2) {
  let res = n1 + n2;
  return res;
}

let r1 = addTwo(var1, var2);
let r2 = addTwo(5, 10);
console.log(r1, r2);
/*how js execute :
1-global execution--this
2-memory phase:--
  var1, var2, r1, r2-> undefined
  addTwo-> definition
3-Execution phase:
var1=5
var2=10
r1 = get addTwo--> it will again create an context box which contain (new var env + EC thread) after work it will delete.
                for function call addTwo it will again create 2 phase (memory and EC phase)

memory phase: var1-> undefined
              var2-> undefined
              total->undefined
EC context: n1 =5
           n2 =10
           total= 15, return in global Execution context 

           for r2 again it repeat(NVE + thread)--> (memory ph , EC phase)

then we go to google chrome and inspect that then use sources (codeEce.js) where we see call stack unning simple code.
  */
