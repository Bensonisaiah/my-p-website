//console.log("i like pizza");
//console.log("its nice");
//window.prompt(`are you sure you want to continue with this site?`)

//window.alert("i love you bro");
//single line comments
/*
this
is
a 
multiple
line 
comment 
*/





//1. declaration operator(var,let,const)
//2. assignment (= assignment operator)
//let firstname = "IZIBILLIONS";//string
//let age = 21;//number
//let student = true;//booleans
//document.getElementById("p1").innerHTML = "HELLO " + firstname;
//document.getElementById("p2").innerHTML = "you are  " + age + " years old";
//document.getElementById("p3").innerHTML = "enrolled: " + student;






/*arithemetic 
      operators(+ - * / %)
      operands (value, variable etc)
      y = x + 5

let numstudent = 20;

numstudent += 2;
let xtrastudent = numstudent % 3;
console.log(xtrastudent);
console.log(numstudent);*/

//operator precedence
//PEMDAS
//(),EXPONENTS,*,/,+,-
//let result = 1 + 2 * (3 + 4);
//console.log(result)






//HOW TO CREATE A USER
//let username = window.prompt("whats your name")
//console.log(username)



document.getElementById("mybutton").onclick = function(){

    username = document.getElementById("mytext").value;
    console.log(username)
    document.getElementById("myh1").innerHTML = `HELLO, ${username} Welcome to`
    window.alert("please confirm your name")
}






//HOW TO CHANGE THE DATATYPE OF A VALUE TO ANOTHER
// (STRING,NUMBER,BOOLEANS)

//let age = window.prompt("how old be your papa")
//age = Number(age);
//age += 1;
console.log(age);
let x = "pizza"
let y = "pizza"
let z = "pizza"

x = Number(x);
y = String(y);
//z = boolean(z);
console.log(typeof x)
console.log(typeof y)
console.log(typeof z)