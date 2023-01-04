// Assignment 02
document.getElementById("test").style.color = "blue";
document.getElementById("test").style.fontSize = "80px";
document.getElementById("test").style.fontWeight = "bold";
document.getElementById("test").style.textAlign = "center";
document.getElementById("test").style.fontFamily = "Arial";

// Assignment 03
console.log(
  "%cElzero %cWeb %cSchool",
  "color: red; font-size: 40px;",
  "color: green; font-size: 40px; font-weight: bold",
  "color: #fff; font-size: 40px; background-color: blue"
);

// Assignment 04
console.group("Group 1");
console.log("Message One");
console.log("Message Two");
console.group("Child Group");
console.log("Message One");
console.log("Message Two");
console.groupEnd("Child Group");
console.group("Grand Child Group");
console.log("Message One");
console.log("Message Two");
console.groupEnd("Grand Child Group");
console.groupEnd("Group 1");
console.group("Group 2");
console.log("Message One");
console.log("Message Two");
console.groupEnd("Group 2");

// Assignment 05
console.table(["Elzero", "Ahmed", "Sameh", "Gamal", "Aya"]);

// Assignment 06
// console.log("I'm In Console");
// document.write("I'm In Page");

// Assignment 07
var numberOne = "10";
var numberTwo = "20";

console.log(numberOne + numberTwo);
console.log(typeof (numberOne + numberTwo));
console.log(`${numberOne}${numberTwo}`);
console.log(typeof `${numberOne}${numberTwo}`);
console.log(numberTwo + "\n" + numberOne);
console.log(`${numberTwo}\n${numberOne}`);

/* Assignment 08
console.log(elzero.innerHTML);
console.log(typeof elzero);
*/

// Assignment 09
console.log(
  '`I\'m In \n \\\\ \nLove \\\\ """" \'\'\'\' \n++ With ++ \n""JavaScript""``'
);

// Assignment 10
let a = 21;
let b = 20;

console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`);

// Variable And Concatenation Challenge
let title = "Elzero";
let desc = "Elzero Web School";
let date = "25/10";

let card = `
  <div class="card">
    <div class="container">
      <h3>Hello ${title}</h3>
      <p>${desc}</p>
      <span>${date}</span>
    </div>
  </div>`.repeat(3);

document.write(card);

// Assignment 11 Replace ? With Arithmetic Operators
console.log(((10 * 20 * 15) % 3) * 190 * 10 * 400);
// -------------------------------------------------------------------

// Assignment 12

let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num + true + true + true); // 6

// Soultion Three
console.log(num * num - num); // 6

// Soultion Four
console.log(num * (num - true)); // 6

// Solution Five
console.log(num * --num); // 6

// Solution Six
console.log((num += num)); // 6

/*
// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num * --num); // 6   num=2

// Soultion Three
console.log(num ** num + num ); // 6 num=2

// Soultion Four
console.log(num ** ++num  - --num); // 6 num=2

// Solution Five
console.log(num ** num * num - num); // 6 num=2

// Solution Six     
console.log(num ** num ** num % num + ++num * --num); // 6
*/

// -------------------------------------------------------------------
// Assignment 13

let num1 = "10";

// Solution One
console.log(+num1 + +num1); // 20 num1 = 10

// Solution Two
console.log(+num1 + --num1 + --num1 - --num1); // 20 num1 = 7

// Solution Three
console.log(+num1 * --num1 - --num1 * --num1 - --num1 + --num1 - --num1); // 20 num1 = 1
// Solution Four
console.log((++num1) ** num1 * ++num1 + ++num1 + num1); // 20

// -------------------------------------------------------------------
// Assignment 14
// قم بطباعة الرقم 100000 ب 13 طريقة مختلفة
// Your Solutions
console.log(50000 * 2); // 100000
console.log(10 ** 5); // 100000
console.log(200000 - 100000); // 100000
console.log(200000 / 2); // 100000
console.log(100000.0); // 100000
console.log(Number("100000")); // 100000
console.log(parseInt("100000.4646 Osama")); // 100000
console.log(parseFloat("100000")); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(Math.ceil(99999.1)); // 100000
console.log(Math.floor("100000.4")); // 100000

console.log(100000); // 100000
console.log(100_000); // 100000
console.log(100000.0); // 100000
console.log(1e5); // 100000
console.log(5e4 + 5e4); // 100000
console.log(6e4 + 4e4); // 100000
console.log(2e4 + 8e4); // 100000
console.log(7e4 + 3e4); // 100000
console.log(1e4 + 9e4); // 100000
console.log(4.5e4 + 5.5e4); // 100000
console.log(10 ** 5); // 100000
console.log(10 ** 3 + 100000 - 1000); // 100000
console.log(10 * 10 * 10 * 10 * 10); // 100000

// -------------------------------------------------------------------
// Assignment 15
// إستخدم MIN_SAFE_INTEGER لتخرج بالنتيجة المطلوبة في المثال

console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

// -------------------------------------------------------------------
// Assignment 16
// إستخدم MIN_SAFE_INTEGER لتخرج بالنتيجة المطلوبة في المثال

console.log(Number.MAX_SAFE_INTEGER - 9007199254740975); // 16

// -------------------------------------------------------------------
// Assignment 17

let myVar = "100.56789 Views";
console.log(Math.trunc(100.56789)); // 100
console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57

// -------------------------------------------------------------------
// Assignment 18
// يجب عليك إستخدام isInteger لتخرج بالناتج رقم 2

let num3 = 10;

console.log(Number.isInteger(num) + true); // 2

// -------------------------------------------------------------------
// Assignment 19
// قم بإستخدام المتغير التالي لتخرج بالنتيجة 10 ب 5 طرق مختلفة

let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(Math.ceil(flt) - true); // 10
console.log(Math.ceil(--flt)); // 10

// ------------------------------------------------------------------
// Assignment 20
// قم بكتابة Code يطبع رقم عشوائي مابين الصفر ورقم 4

console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4
console.log(Math.ceil(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4
console.log(Math.trunc(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4
console.log(Math.round(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4
console.log(parseInt(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4

// -------------------------------------------------------------------

// Assignment 21

/*
لديك متغير يحتوي على String 
المطلوب جلب أول حرف من ال String
يجب تنفيذ الحل ب 6 طرق مختلفة
يجب عدم تكرار اي حل ويجب إستعمال المتغير فقط
يجب التأكد أن الحرف صغير Small Letter
واحد من الحلول تأكد أنه يقوم بتكرار الحرف المأخوذ 3 مرات
*/

let userName = "Elzero";

console.log(userName.length);
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.slice(-6, -5).toLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(
  userName.substring(userName.length - 6, userName.length - 5).toLowerCase()
);
console.log(userName.substr(0, 1).toLowerCase()); //e
console.log(userName.substr(-17, 1).toLowerCase());
console.log(userName.slice(0, 1).toLowerCase().repeat(3)); // eee

// -------------------------------------------------------------------

// Assignment 22

/*
لديك بعض المتغيرات عبارة عن كلمة ومجموعة حروف
في السطر الأول تأكد أن الحرف Z موجود داخل الكلمة وان النتيجة التي ستخرج هي true
في السطر الثاني تأكد أن الكلمة تبدا بالحرف E وأن النتيجة التي ستخرج هي true
في السطر الثالث تأكد أن الكلمة تنتهي بالحرف o وأن النتيجة التي ستخرج هي true
لاحظ حالة الأحرف Capital And Small
غير مسموح التلاعب بالمتغيرات
*/

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True

// -------------------------------------------------------------------

// Assignment 23
console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 > 100 || 10 > 20); // true
console.log(-10 <= "-10"); // true
console.log(!-50 != +"-40"); // true
console.log(!10 <= -"-40"); // true
console.log(!"10" <= 10); // true
console.log(!20 == false); // true

// -------------------------------------------------------------------

// Assignment 24

let Num1 = 10;
let Num2 = 20;

console.log(Num2 > Num1); // true
console.log(Num2 >= Num1); // true
console.log("Your Code Here"); // true
console.log("Your Code Here"); // true
console.log("Your Code Here"); // true
console.log("Your Code Here"); // true

//------------------------------------------------------------------------

let index = 10;
let jump = 2;
let end = 0;
let n = index;

for (;;) {
  if (n > jump) {
    console.log(n);
    n -= jump;
  } else {
    break;
  }
}

//-------------------------------------------------------------------

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let counter = letter.length;

for (let i = letter.length - letter.length; i < friends.length; i++) {
  if (friends[i][letter.length - letter.length] === letter.toUpperCase()) {
    continue;
  } else {
    console.log(`"${counter} => ${friends[i]}"`);
  }
  counter++;
}

//----------------------------------------------------------------------
let start1 = 0;
let swappedName = "elZerO";
let swappedNameFinished = "";

for (let i = start1; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toUpperCase()) {
    swappedNameFinished += swappedName[i].toLowerCase();
  } else {
    swappedNameFinished += swappedName[i].toUpperCase();
  }
}
console.log(`${swappedNameFinished}`);

//----------------------------------------------------------------------

let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = start; i < mix.length; i++) {
  if (typeof mix[i] === "string" || mix[i] === mix[start]) {
    continue;
  } else {
    console.log(mix[i]);
  }
}

//----------------------------------------------------------------------
//----------------------------------------------------------------------

let friends1 = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index1 = 0;
let counter1 = 0;

for (let index1 = 0; index1 < friends1.length; index1++) {
  if (
    typeof friends1[index1] === "number" ||
    friends1[index1][0] === friends1[0][0].toUpperCase()
  ) {
    continue;
  } else {
    console.log(`${++counter1} => ${friends1[index1]}`);
  }
}

// Output
// "1 => Sayed"
// "2 => Mahmoud"

//----------------------------------------------------------------------
//----------------------------------------------------------------------

let friends2 = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index2 = 0;
let counter2 = 0;

while (index2 < friends2.length) {
  if (
    typeof friends2[index2] === "number" ||
    friends2[index2][0] === friends2[0][0].toUpperCase()
  ) {
    index2 += 1;
    continue;
  } else {
    console.log(`${++counter2} => ${friends2[index2]}`);
    index2 += 1;
  }
}

//----------------------------------------------------------------------
//----------------------------------------------------------------------
/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Kamal", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
  "Kim",
  "Karam",
];

for (i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    break;
  }
}

document.write(`<div id="container">We Have X Admins`);

document.write(`<div>We Have ${i} Admins</div>`);
document.getElementById("container").style.backgroundColor = "#07efca";
document.getElementById("container").style.width = "600px";
document.getElementById("container").style.textAlign = "center";
document.getElementById("container").style.margin = "20px auto";
document.write(`<hr>`);

for (i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    break;
  } else {
    document.write(`<div>The Admin For Team ${i + 1} Is ${myAdmins[i]}`);
    document.write(`<h3>Team Members:</h3>`);

    let counter = 0;
    for (j = 0; j < myEmployees.length; j++) {
      if (myEmployees[j][0] === myAdmins[i][0]) {
        document.write(`<p>-${++counter} ${myEmployees[j]}</p>`);
      }
    }

    document.write(`<hr>`);
    document.write(`</div>`);
  }
}

//----------------------------------------------------------------------
//----------------------------------------------------------------------
/*
Function Advanced Practice
- Parameters
- Default
- Rest
- Loop
- Condition
*/

function showInfo(us = "Un", ag = "Un", ra = 0, show = "Yes", ...sk) {
  document.write(`<div>`);
  document.write(`<h1>Welcome, ${us}</h1>`);
  document.write(`<p>Age: ${ag}</p>`);
  document.write(`<p>Hour Rate: $${ra}</p>`);
  if (show === "Yes") {
    if (sk.length > 0) {
      document.write(`<h4>Skills Are:</h4>`);
      for (let i = 0; i < sk.length; i++) {
        document.write(`<p>- ${sk[i]}</p>`);
      }
    } else {
      document.write(`<p>Skills: No Skills</p>`);
    }
  } else {
    if (sk.length > 0) {
      document.write(`<h5>Skills Are Hidden</h5>`);
    } else {
      document.write(`<h5>Skills: No Skills</h5>`);
    }
  }
  document.write(`</div>`);
}

showInfo("Eyas", 25, 20, "No", "Html", "Css", "JavaScript");

//----------------------------------------------------------------------

function calculate(firstNum, secondNum, operation) {
  if (secondNum === undefined) {
    console.log(`Second Number Not Found`);
  } else if (operation === undefined || operation === "add") {
    console.log(firstNum + secondNum);
  } else if (operation === "subtract") {
    console.log(firstNum - secondNum);
  } else if (operation === "multiply") {
    console.log(firstNum * secondNum);
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

// ---------------------------------------------------------------------

// التكليف 03

function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100) {
    console.log(`The Age is ${theAge}
    Months => ${theAge * 12}
    Weeks => ${theAge * 52}
    Days => ${theAge * 365}
    Hours => ${theAge * 24 * 365}
    Minutes => ${theAge * 24 * 60 * 365}
    Seconds => ${theAge * 365 * 24 * 60 * 60}`);
  } else {
    console.log("Age Out Of Range");
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(25); // Months Example => 456 Months

//-----------------------------------------------------------------------------

// Random Arguments Function Challenge

function checkStatus(a, b, c) {
  let theData = [a, b, c];
  for(let i = 0; i < theData.length; i++) {
    typeof theData[i] === "string"
    ? (theName = theData[i])
    : typeof theData[i] === "number" 
    ? (theAge = theData[i])
    ? typeof theData[i] === "boolean" && theData[i] === true
    : theStatus = "Available"
    : theStatus = "Not Available"
  }
  console.log(`Hello ${theName}, Your Age Is ${theAge}, You Are ${theStatus} For Hire`);
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
checkStatus(25, false, "Ali");
checkStatus(25, true, "Eyas");
checkStatus("Anas", true, 27);

// ----------------------------------------------------------------------------------
