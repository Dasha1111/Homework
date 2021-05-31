// Task 1
function Task1(){
    let admin;
    let nameTask1="Daria";
    let box=nameTask1;
    nameTask1=admin;
    admin=box;
    alert(admin); // Daria
}
//Task1();


// Task 2
// const BIRTHDAY = '18.04.1982'; // здесь мы можем использовать заглавные буквы, потому что это значение определенно до выполнения кода.
// const AGE = someCode(BIRTHDAY); // здесь нужно использовать в нижнем регистре, потому что эта переменная вычисляется во время выполнения кода.



// Task 3
function Task3(){let nameTask2 = "Ilya";
console.log( `hello ${1}` ); // hello 1
console.log( `hello ${"name"}` ); // hello name
console.log( `hello ${nameTask2}` ); // hello Ilya
}
//Task3();


// Task 4
"" + 1 + 0 //10
"" - 1 + 0 //-1
true + false //1
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //"9px"
"$" + 4 + 5 //"$45"
"4" - 2 //2
"4px" - 2 //NaN
7 / 0 //infinity
" -9 " + 5 //"-9 5"
" -9 " - 5 //-14
null + 1 //1
undefined + 1 //NaN


// Task 5
// let a = 1, b = 1;
// let c = ++a; // 2
// let d = b++; // 1


// Task 6
let a1 = 2;
let x = 1 + (a1 *= 2);// a=4, c=5


// Task 7
5 > 4 //true
"ананас" > "яблоко" //false
"2" > "12" //true
undefined == null //true
undefined === null //false
null == "\n0\n" //false
null === +"\n0\n" //false


//Task 8
// let nameTask8=prompt("Как вас зовут?");
// console.log(nameTask8);

 
//Task 9
// if ("0") {
//     console.log( 'Привет' );
// }// выведет Привет, потому что условие true(строка не пустая)


//Task 10
// let nameTask10=prompt("Каково «официальное» название JavaScript?");

// if(nameTask10==="ECMAScript"){
//     console.log("Верно!");
// }
// else{
//     console.log("Не знаете? ECMAScript!");
// }


//Task 11
// let number=prompt("Введите число:");
// if(number>0){
//     console.log(1);
// }
// else if(number<0){
//     console.log(-1);
// }
// else{
//     console.log(0);
// }


// Task 12
// let numberA=prompt("Введите число a:");
// let numberB=prompt("Введите число b:");
// console.log(numberA);
// console.log(numberB);
// let result=(+numberA + +numberB)<4 ? "Мало":"Много";
// console.log(result);

// Task 13
// let login=prompt("nnn");
// let message=(login == 'Сотрудник')?'Привет':
// (login == 'Директор')?'Здравствуйте':
// (login == '')?'Нет логина':'';
// console.log(message);


// Task 14
// alert( null || 2 || undefined );//2


// Task 15
//alert( alert(1) || 2 || alert(3) );//alert (1), alert(2)


// Task 16
//alert( 1 && null && 2 );//null


//Task 17
//alert( alert(1) && alert(2) );//alert(1), alert(undefined)


//Task 18
//alert( null || 2 && 3 || 4 );//3


//Task 19
// let age=prompt("Введите возраст:");
// if(age>=14 && age<=90){
//     console.log("Welcome");
// }
// else{
// console.log("Prohoboted");
// }


//Task 20
// let age=prompt("Введите возраст:");
// if(!(age>=14 && age<=90)){
//     console.log("Welcome");
// }
// else{
// console.log("Prohoboted");
// }

// let age=prompt("Введите возраст:");
// if(age<14 || age>90){
//     console.log("Welcome");
// }
// else{
// console.log("Prohoboted");
// }


//Task 21
// if (-1 || 0) alert( 'first' );//-1, выполнится
// if (-1 && 0) alert( 'second' );//0, не выполниться потому что условие false
// if (null || -1 && 1) alert( 'third' );//1, выполнится


//Task 22
// let loginTask22=prompt("Введите логин");
// let passwordTask22;
// if(loginTask22==="Админ"){
//     passwordTask22=prompt("Введите пароль");
//     if(passwordTask22==="Я главный"){
//         alert("Здравствуйте!");
//     }
//     else if(passwordTask22===null){
//         alert("Отменено");
//     }
//     else{
//         alert("Неверный пароль")
//     }
// } else if(loginTask22==="" || loginTask22===null){
//     alert("Отменено");
// } else{
//     alert("Я вас не знаю");
// }


//Task 23
// let browser=prompt("Какой у Вас браузер?");
// if(browser==='Edge'){
//     console.log("You've got the Edge!");
// } else if(browser==='Chrome' || browser==='Firefox' || browser==='Safari' || browser==='Opera'){
//     console.log('Okay we support these browsers too');
// } else{
//     console.log('We hope that this page looks ok!');
// }


//Task 24
// let aTask24 = +prompt('a?', '');
// switch(aTask24){
//     case 0:
//         alert( 0 );
//         break;
//     case 1:
//         alert(1);
//         break;
//     case 2:
//     case 3:
//         alert( '2,3' );   
// }


//Task 25
// let numberTask25=+prompt("Введите число");
// if(numberTask25>0){
//     console.log(++numberTask25);
// } else{
//     console.log(numberTask25);
// }


//Task 26
// let numberTask25=+prompt("Введите число");
// if(numberTask25>0){
//     console.log(++numberTask25);
// } else{
//     console.log(numberTask25-=2);
// }


//Task 27
// let numberTask25=+prompt("Введите число");
// if(numberTask25>0){
//     console.log(++numberTask25);
// } else if(numberTask25===0){
//     console.log(numberTask25=10);
// } else{
//     console.log(numberTask25-=2);
// }


//Task 28
// let number1Task28=+prompt("Введите число 1");
// let number2Task28=+prompt("Введите число 2");
// let number3Task28=+prompt("Введите число 3");
// let positiveTask28=0;
// if(number1Task28>0){
//     positiveTask28++;
// }
// if(number2Task28>0){
//     positiveTask28++;
// }
// if(number3Task28>0){
//     positiveTask28++;
// }
// console.log(positiveTask28);


//Task 29
// let number1Task29=+prompt("Введите число 1");
// let number2Task29=+prompt("Введите число 2");
// let number3Task29=+prompt("Введите число 3");
// let positiveTask29=0;
// let negativeTask29=0;
// if(number1Task29>0){
//     positiveTask29++;
// } else if(number1Task29<0){
//     negativeTask29++;
// }
// if(number2Task29>0){
//     positiveTask29++;
// } else if(number2Task29<0){
//     negativeTask29++;
// }
// if(number3Task29>0){
//     positiveTask29++;
// } else if(number3Task29<0){
//     negativeTask29++;
// }
// console.log(positiveTask29);
// console.log(negativeTask29);


//Task 30
// let numberA=+prompt("Введите число a:");
// let numberB=+prompt("Введите число b:");
// if(numberA>numberB){
//     console.log(numberA);
// } else if(numberB>numberA){
//     console.log(numberB);
// }


//Task 31
// let numberA=0;
// let numberB=1;
// let serialNumber;
// if(numberA>numberB){
//     console.log(serialNumber=2);
// }else console.log(serialNumber=1);



//Task 32
// let numberA=+prompt("Введите число a:");
// let numberB=+prompt("Введите число b:");
// if(numberA>numberB){
//     console.log(numberA);
//     console.log(numberB);
// } else if(numberB>numberA){
//     console.log(numberB);
//     console.log(numberA);
// }



//Task 33
// let numberA=5.2;
// let numberB=3.8;
// let boxA=numberA;
// numberA=numberB;
// numberB=boxA;
// console.log(numberA);
// console.log(numberB);


//Task 34
// let numberA=5;
// let numberB=5;
// let sum=numberA+numberB;
// if(numberA!==numberB){
//     numberA=sum;
//     numberB=sum;
// } else{
//     numberA=0;
//     numberB=0;
// }
// console.log(numberA);
// console.log(numberB);


//Task 35
// let numberA=1;
// let numberB=3;
// let sum=numberA+numberB;
// if(numberA!==numberB){
//     if(numberA>numberB){
//         numberB=numberA;
//     } else if (numberB>numberA){
//         numberA=numberB;
//     }
// } else{
//     numberA=0;
//     numberB=0;
// }
// console.log(numberA);
// console.log(numberB);


//Task 36
// let numberA=+prompt("Введите число a:");
// let numberB=+prompt("Введите число b:");
// let numberC=+prompt("Введите число c:");
// let min;
// if (numberA < numberB){
//     min = numberA;
// } else min = numberB;
// if (numberC < min){
//     min = numberC;
// } 
// console.log(min);




//Task 37
// let numberA=+prompt("Введите число a:");
// let numberB=+prompt("Введите число b:");
// let numberC=+prompt("Введите число c:");
// let min, max, aver;
// if (numberA < numberB){
//     min = numberA;
// } else min = numberB;
// if (numberC < min){
//     min = numberC;
// } 
// if (numberA > numberB){
//     max = numberA;
// } else max = numberB;
// if (numberC > max){
//     max = numberC;
// } 
// aver = numberA + numberB + numberC - min - max;
// alert(aver);


//Task 38
// let numberA=+prompt("Введите число a:");
// let numberB=+prompt("Введите число b:");
// let numberC=+prompt("Введите число c:");
// let min, max;
// if (numberA < numberB){
//     min = numberA;
// } else min = numberB;
// if (numberC < min){
//     min = numberC;
// } 
// if (numberA > numberB){
//     max = numberA;
// } else max = numberB;
// if (numberC > max){
//     max = numberC;
// } 
// console.log(min);
// console.log(max);



//Task 39
// let numberA=+prompt("Введите число a:");
// let numberB=+prompt("Введите число b:");
// let numberC=+prompt("Введите число c:");
// if (numberA<=numberB && numberA<=numberC){
//     console.log(numberB+numberC)
// } else if (numberB<=numberA && numberB<=numberC) {
//     console.log(numberA+numberC)
// } else if (numberC<=numberA && numberC<=numberB) {
//     console.log(numberA+numberB);
// }


//Task 40
// let numberA=+prompt("Введите число a:");
// let numberB=+prompt("Введите число b:");
// let numberC=+prompt("Введите число c:");
// let serialNumber;
// if (numberA === numberB){
//     console.log(serialNumber=3);
// } else if(numberA ===numberC){
//     console.log(serialNumber=2);
// } else console.log(serialNumber=1);
 