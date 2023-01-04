
/*  
    -ES6 => 
    Ecma International هي جمعية صناعية مكرسة لتوحيد أنظمة المعلومات والاتصالات.
    Ecma International is an industry association dedicatied to the standardization of information and communication systems.
*/
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// wait The Window To Load
// window.onload = function () {
//   document.querySelector("h1").style.color = "blue";
// };
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Window Methods:
// *Window.alert(""); => window.alert("Hello From JS File");
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// - Document Methods:
// *document.write(""); =>
document.write("<h1>Hello <span>World</span></h1>");

// *document.querySelector("") =>
document.querySelector("h1").style.color = "#666";
document.querySelector("h1").style.fontFamily = "Arial";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").title = "querySelector";
document.querySelector("span").style.color = "#12b1e1";
document.querySelector("span").style.fontSize = "1.3em";

// *document.getElementById(""); =>
document.getElementById("test").style.color = "#333";
document.getElementById("test").style.fontSize = "2em";
document.getElementById("test").style.fontWeight = "bold";
document.getElementById("test").style.textAlign = "center";
document.getElementById("test").style.fontFamily = "Arial";
document.getElementById("test").style.paddingTop = "30px";
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// - Console Methods:
// *console.log("");

// styling-console-log =>
console.log(
  "%cHello Form %cJS File",
  "color: orange; font-size: 40px",
  "color: green; font-size: 40px"
);

// *console.error(""); =>
console.error("Error");

// *console.table(""); =>
console.table(["Osama", "Ahmed", "Sayed"]);

//*console.group("1");
//console.groupEnd("1");
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
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Data Types Intro
//  -String => عبارة عن نص او رسالة
//  -Number
//  -Array => Object
//  -Object
//  -Boolean => true OR false
//  -Undefined
//  -Null => Object
//  -NaN  => Not a Number

console.log(typeof "Osama");
console.log(typeof 5000);
console.log(typeof 5000.99);
console.log(typeof [10, 15, 17]);
console.log(typeof ["OS", "Ah", "Sa"]);
console.log(typeof { name: "Osama", age: 18, country: "Eg" });
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Variables Intro:
// - Syntax ( Keyword => var + Variable Name + Assignment Operator + Variable Value) =>
var user = "Eyas",
  age = "25";

console.log(user);
console.log(age);

// - Id And Global Variable =>
console.log(hello);
document.getElementById("hello").style.color = "#666";
document.getElementById("hello").style.fontFamily = "Arial";
document.getElementById("hello").style.fontSize = "2em";
document.getElementById("hello").style.textAlign = "center";
document.getElementById("hello").title = "Id And Global Variable";
hello.innerHTML = "Option";

// *var myName = "Eyas";
// console.log("Hello " + myName);
// console.log(`Hello ${myName}`);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
var
- Readeclare (Yes)
- Access Before Declare (Undefined)
- Varibale Scope Drana [Added To Window] (YES)
- Block or Function Scope 

let
- Readeclare (No => Error)
- Access Before Declare (Error)
- Varibale Scope Drana [Added To Window] (NO)
- Block or Function Scope 

const
- Readeclare (No => Error)
- Access Before Declare (Error)
- Varibale Scope Drana [Added To Window] (NO)
- Block or Function Scope 
*/
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
String Syntax + Character Escape Sequences
  We Use (\) To Escape OR Ignoring
  We Use (\n) To make a new Line
*/

console.log('Elzero Web "School"');
console.log("Elzero Web 'School'");
console.log('Elzero \
Web \
"School"');
console.log("Elzero \nWeb \nSchool");

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Concatenation
نظرية في علوم الكومبيوتر تقوم بوصف السترينغ ببعضها البعض او ربط المعلومات ببعضهاالبعض
*/

let a = "We Love";
let b = "JavaScript";
let c = " ";

document.write(a + " " + b);
console.log(a + " " + b);
console.log(a, b);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Template Literals (Template Strings)

*/

let aa = "We Love";
let bb = "JavaScript";
let cc = "And";
let dd = "Porgramming";

console.log(aa + ' "" ' + "\\ " + bb + "\n" + cc + " " + dd);
console.log(`${aa} "" '' / % $ § & ? \\ ${5 * 5} ${bb} 
${cc} ${dd}`);

let title = "Elzero";
let desc = "Elzero web School";
let datum = "06/07";

let markUp = `
<div class="card">
  <h2>${title}</h2>
  <p>${desc}</p>
  <span>${datum}</span>
</div>
`;
document.write(markUp);

let title1 = "Eyas";
let para =
  "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, velit sapiente. Nam fugiat optio dolorem eligendi voluptates voluptate atque quasi, maxime perspiciatis aspernatur, ipsam harum ea placeat saepe asperiores sequi?";

let testing = `
  <div class="testing">
    <h1>${title1}</h1>
    <p>${para}</p>
  </div>
`;
document.write(testing);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Arithmetic Operators

// + Addition
console.log(10 + 10);
console.log(10 + "osama");

// - Subtraction
console.log(10 - 20);
console.log(10 - "osama");
console.log(typeof NaN);

// * Multiplicaion
console.log(10 * 20);
console.log(10 * -20);
console.log(10 * "osama");

// / Division
console.log(20 / 5);
console.log(20 / 3);
console.log(20 / "osama");

// ** Esponentation (Es7) الأوس
console.log(2 ** 4);
console.log(2 * 2 * 2 * 2);

// % Modulus (Division Remainder)
console.log(30 / 2);
console.log(31 / 2);
console.log(30 % 2);
console.log(31 % 2); // Remove 1

// ++ Increment [ Post / Pre ]
// -- Decrement [ Post / Pre ]

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
  - + Unary Plus [Return Number If Its Not Number]
  - - Unary Negation [Return Number If Its Not Number + Negates It]
  Tests
  - Normal Number
  - String Number
  - String Negative Number
  - String Text
  - Float
  - Hexadecimal Numeral System => 0xFF
  - null
  - false
  - true
*/
console.log(+100);
console.log(+"100");
console.log(+"-100");
console.log(+"Osama");
console.log(typeof +"Osama");
console.log(+"15.5");
console.log(+0xff);
console.log(+null);
console.log(+false);
console.log(+true);

console.log(-100);
console.log(-"100");
console.log(-"-100");
console.log(-"Osama");
console.log(-"15.5");
console.log(-0xff);
console.log(-null);
console.log(-false);
console.log(-true);

console.log(Number("100"));

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Type Coercion (Type Casting)
- +
- -
- "" - 2
- false - true
*/

// let one = "10";
// let two = 20;
// let three = true;

// console.log(+one + two + three);
// console.log(two + three);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Assignment Operators

let one = 100;

one += 100; // => one = one + 100;
one -= 50; // => one = one - 50;
one /= 50; // => one = one / 50;

console.log(one);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Number
- Double Precision 
- Syntactic Sugar "_"
- e 
- **
- Width Decimal
- Number + BigInt
- Number Min Value
- Number Max Value
*/
console.log(1000000); //=>
console.log(1_000_000); //=>  Syntactic Sugar "_"
console.log(1e6); //=> e
console.log(10 ** 6); //=> **
console.log(10 * 10 * 10 * 10 * 10 * 10); //=>  Width Decimal
console.log(1000000.0); //=>

console.log(Number.MAX_SAFE_INTEGER); //=>
console.log(Number.MAX_VALUE); //=>
console.log(Number.MAX_VALUE + 12354884554); //=>

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/***
Number Methods
- Two Dots To Call A Methods => console.log(10..toString());
- toString()
- toFixed()
- parseInt() تقوم بأرجاع عدد صحصيح ||parse=> تحليل  Int=> العدد الصحيح ||
- parseFloat() تقوم بأرجاع عدد مع الكسور ||parse=> تحليل  Int=> الكسور ||
- isInteger() [ES6]
- isNan()  [Es6]

***/
// toString()
console.log((100).toString());
console.log((100).toString());

// toFixed()
console.log((100.55555).toFixed(2));

// parseInt() parse=> تحليل  Int=> العدد الصحيح
// تقوم بأرجاع عدد صحصيح

console.log(Number("100 osama"));
console.log(+"100 osama");
console.log(parseInt("100 osama"));
console.log(parseInt("osama 100 osama"));

// parseFloat() parse=> تحليل  Int=> الكسور
// تفوم بأرجاع عدد مع الكسور

console.log(parseInt("100.50 osama"));
console.log(parseFloat("100.50 osama"));

// isInteger()
// هل هو عدد صحيح
console.log(Number.isInteger("100"));
console.log(Number.isInteger(100.5));
console.log(Number.isInteger(100));

// isNan()
console.log(Number.isNaN(100));
console.log(Number.isNaN("Osama" / 20));

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/** 
Math Object => لتقريب الرقم ل العدد الصحيح
- round() 
- ceil() => تعني السقف تقوم بتقريب الرقم الى الاعلى
- floor()  => تعني الارض تقوم بتقريب الرقم الى الأسفل
- min() => ليعطينا الرقم الاصغر من بين مجموعة أرقام
- max => ليعطينا الرقم الأكبر من بين مجموعة أرقام
- pow()=> تعطيه الرقم و الأس تبعه ليعطيك الناتج
- random
- trunc() [ES6] => تعني القطع|| يقوم بحذف الكسور ويعطي الرقم الصحيح||

**/
console.log(Math.round(99.2));
console.log(Math.round(99.5));

console.log(Math.ceil(99.2));
console.log(Math.floor(99.9));

console.log(Math.min(10, 20, 100, -100, 90));
console.log(Math.max(10, 20, 100, -100, 90));

console.log(Math.pow(2, 4));

console.log(Math.random());

console.log(Math.trunc(99.9));

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* String Methods

(Index: تمثل الرقم الخاص بالموقع | او البوزيشن الخاص بالعنصر داخل السيكونس)
(Sequence: تعني البيانات المتسلسة)
- Access With Index
- Access With charAt() اعطيه بوزيشن يرجع لي الكاريكتار الموجود في البوزيشن
- lenght تقوم بحساب عدد العناصر الموجودة في السيكونس
- trim() تقوم بحذف المسافات التي قبل العنصر وبعده > Removes the leading and trailing white space and line terminator characters from a string.
- toUpperCase() يقوم بتحويل جميع الالفابيت كاركتارز الى احرف كبيرة
- toLowerCase() يقوم بتحويل جميع الالفابيت كاركتارز الى احرف صغيرة
- Chain Methods هي عبارة عن جميع الطرق السابقة متسلسلة ورا بعض
*/

let theName = "  Ahmed  ";
let theList = [1, 2, 3, 4, 5];

console.log(theName);
console.log(theName[1]);
console.log(theName[5]);

console.log(theName.charAt(1));
console.log(theName.charAt(5));

console.log(theName.length);
console.log(theName.trim(theName));

console.log(theName.toUpperCase(theName));
console.log(theName.toLowerCase(theName));

console.log(theName.trim().charAt(2).toUpperCase());

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* String Methods
- indexOf(Value [Mand-اجباري], Start [Opt-اختياري] 0) => تعطيه قيمة معينة ليبحث عنها داخل السترينج ويرجع لنا البوزيشن تبعها فين , عندما لايجد القيمة المعطاه سوف يرجع لنا سالب واحد
- lastIndexOf(Value [Mand], Start [Opt] Length)
- slice(Start [Mand], End [Opt] Not Include End)
- repeat(Times) [ES6]
- split(Separator [Opt], Limit[Opt]) => Split a string into substrings using the specified separator and return them as an array.

*/

let e = "Elzero Web School";

console.log(e.indexOf("Web")); // 7
console.log(e.indexOf("Web", 8)); // -1

console.log(e.indexOf("l")); // 1
console.log(e.lastIndexOf("l")); // 16

console.log(e.slice(2, 6)); // zero
console.log(e.slice(-15, -11)); // zero

console.log(e.repeat(5)); // e * 5Times

console.log(e.split("")); //(17) ['E', 'l', 'z', 'e', 'r', 'o', ' ', 'W', 'e', 'b', ' ', 'S', 'c', 'h', 'o', 'o', 'l']
console.log(e.split(" ")); // (3) ['Elzero', 'Web', 'School']
console.log(e.split("", 6)); //(6) ['E', 'l', 'z', 'e', 'r', 'o']

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* String Methods
** substring(Start [Mand], End [Opt] Not Including End)
--- Start > End Will Swap 
--- Start < 0 It Start From 0
--- Use Lenght To Get Last Character
** substr (Start [Mand], Characters To Extract)
--- Start >= Lenght = ""
--- Negative Start From End
** includes (Value [Mand], Start [Opt] Default 0) [ES6]
** startWith(Value [Mand], Start [Opt] Default 0) [ES6]
** endsWidth(Value [Mand], Lenght [Opt] Default Full Lenght) [ES6]

*/

let f = "Elzero Web School";

console.log(f.length);

// substring
console.log(f.substring(2, 6));
console.log(f.substring(6, 2));
console.log(f.substring(-10, 6));
console.log(f.substring(f.length - 1));
console.log(f.substring(f.length - 5, f.length - 3));

// substr
console.log(f.substr(0));
console.log(f.substr(0, 6));
console.log(f.substr(17));
console.log(f.substr(-5, 2));
console.log(f.substr(-17, 1));

// includes
console.log(f.includes("Web")); // true
console.log(f.includes("Web", 8)); // false

// startWith
console.log(f.startsWith("E")); // true
console.log(f.startsWith("E", 2)); // false
console.log(f.startsWith("z", 2)); // true

// endsWidth
console.log(f.endsWith("o")); // false
console.log(f.endsWith("ro", 6)); // ture
console.log(f.endsWith("Elzero", 6)); // true

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
Comparison Operators
- == Equal
- != Not Equal

- === Identical
- !== Not Identical

- > Larger Than
- >= Larger Then Or Equal

- < Smaller Than
- <= Smaller Than Or Equal

*/

console.log(10 == "10"); // Compare Value Only
console.log(-100 == "-100"); // Compare Value Only
console.log(10 != "10"); // Compare Value Only

console.log(10 === "10"); // Compare Value + Type
console.log(10 !== "10"); // Compare Value + Type
console.log(10 !== 10); // Compare Value + Type

console.log(10 > 20);
console.log(10 > 10);
console.log(10 >= 10);

console.log(10 < 20);
console.log(10 < 10);
console.log(10 <= 10);

console.log(typeof "Osama" === typeof "Ahmed");

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
Logical Operators
- ! => Not
- && => And
- || => Or
*/

// ! => Not
console.log(true);
console.log(!true);

console.log(10 == "10");
console.log(!(10 == "10"));

// && => And
console.log(10 == "10" && 10 > 8 && 10 > 50);

// || => Or
console.log(10 == "10" || 10 > 80 || 10 > 50);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
Control Flow + Nested If
- if
- else if
- else
** if (Condition) {
    // Block Of Code
}

*/

let price = 100;
let discount = false;
let discountAmount = 30;
let country = "Egypt";
let student = true;

if (discount === true) {
  price -= discountAmount; // price = price - discountAmount
} else if (country === "Egypt") {
  if (student === true) {
    price -= discountAmount + 30;
  }
  if (student === false) {
    price -= discountAmount + 10;
  }
} else if (country === "Syria") {
  if (student === true) {
    price -= discountAmount + 40;
  }
  if (student === false) {
    price -= discountAmount + 10;
  }
} else {
  price -= 10;
}

console.log(price);

/*
Conditinal (Termary) Operator
*/

let theNamee = "Mona";
let theGender = "Female";
let theAge = 30;

if (theGender === "Male") {
  console.log("Mr");
} else {
  console.log("Mrs");
}

// Condition ? If True : If False

theGender === "Male" ? console.log("Mr") : console.log("Mrs");

let result = theGender === "Male" ? "Mr" : "Mrs";

document.write(result);

console.log(theGender === "Male" ? "Mr" : "Mrs");

console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theNamee}`);

theAge < 20
  ? console.log(20)
  : theAge > 20 && theAge <= 60
  ? console.log("20 To 60")
  : theAge > 60
  ? console.log("Larger Than 60")
  : console.log("Unkown");

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* 
هي لعرض بيانات بديلة عن البيانات تبعي 
Logical Or ||
-- Null + Undefined + Any Falsy Value
Nullish Coalescing Operator ??
-- Null + Undefined
*/

console.log(Boolean(100)); // True
console.log(Boolean(-100)); // True
console.log(Boolean(0)); // False
console.log(Boolean("")); // False
console.log(Boolean(null)); // False

let price1 = 0;

console.log(`The Price Is ${price1 || 200}`);
console.log(`The Price Is ${price1 ?? 200}`);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Switch Statement => it does controll for the flau like the If and Else If
  switch (experession) {
    Case 1: 
    // Code Block
    break;
    Case 2: 
    // Code Block
    break;
    Default:
    // Code Block
  }
  - Default Ordering
  - Multiple Match
  - ===
*/

let day = 4;

switch (day) {
  default:
    console.log("Unknown Day");
    break;
  case 0:
    console.log("Saturday");
    break;
  case 1:
    console.log("Sunday");
    break;
  case 2:
  case 3:
    console.log("Monday");
    break;
}
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Arrays
- Create Arrays [Two Methods] new Array() + []
- Access Arrays Elements
- Nested Arrays
- Change Arrays Elements
- Check For Array Array.isArray(arr);
*/

let meinFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];

console.log(`Hello ${meinFriends[0]}`);
console.log(`Hello ${meinFriends[2]}`);
console.log(`Hello ${meinFriends[1][2]}`);
console.log(`Hello ${meinFriends[3][1]}`);
console.log(`Hello ${meinFriends[3][1][2]}`);

console.log(meinFriends);
meinFriends[1] = "Gamal";
console.log(meinFriends);
meinFriends[3] = ["Sameh", "Ameer"];
console.log(meinFriends);

console.log(typeof meinFriends);
console.log(Array.isArray(meinFriends));

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Arrays Methods
- Length
*/
// Index Start From 0 [0, 1, 2, 3, 4]

let myCos = ["Eyas", "Anas", "Mahmoud", "Bahaa", "Osama"];

myCos[myCos.length - 2] = "Gamal";

// myCos.length = 2; للتحكم بعدد العناصر المراد اظهاراها

console.log(myCos);

/*
Arrays Methods [Adding And Removing]
- unshift("", "") Add Element to The First
- push("", "") Add Element To The End 
-shift() Remove First Element From Array 
- pop() Remove Last Element Form Array 
*/
let array = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

console.log(array);

array.unshift("Osama", "Nabil");

console.log(array);

array.push("Samah", "Eman");

console.log(array);

let first = array.shift();

console.log(array);

console.log(`First Name is ${first}`);

let last = array.pop();

console.log(array);

console.log(`Last Name is ${last}`);

/*
Arrays Methods [Search]
- indexOf(Search Element, From Index [Opt])
- lastIndexOf(Search Element, From Index [Opt])
- includes(ValueToFind, fromIndex [Opt])  [ES7]
*/

let array1 = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];

console.log(array1);

console.log(array1.indexOf("Ahmed"));
console.log(array1.indexOf("Ahmed", 2));

console.log(array1.lastIndexOf("Ahmed"));
console.log(array1.lastIndexOf("Ahmed", -2));

console.log(array1.includes("Ahmed"));
console.log(array1.includes("Ahmed", 2));

if (array1.lastIndexOf("Osama") === -1) {
  console.log("Not Found");
}

console.log(array1.indexOf("Osama"));
console.log(array1.lastIndexOf("Osama"));

/** 
Arrays Methods [Sort]
- sort(Function [Opt])
- reverse
**/

let array2 = [10, "Sayed", "Mohamed", "90", 1000, 100, 20, "10", -20, -10];

console.log(array2);
console.log(array2.sort());
console.log(array2.reverse());
console.log(array2.sort().reverse());

/**
Arrays Methods [Slicing]
- slice(Start [OPt], End [Opt] Not Including End)
--- slice() => All Array
--- If Start Is Undefined => 0
--- Nefative Count From End
--- If End Is Undefined || > Indexes => Slice To The End Array.length
--- Return New Array

- splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
--- If Negative => Start From The End
*/

let array3 = ["0", "1", "2", "3", "4", "5"];

console.log(array3);
console.log(array3.slice());
console.log(array3.slice(1));
console.log(array3.slice(1, 3));
console.log(array3.slice(-3));
console.log(array3.slice(1, -2));
console.log(array3.slice(-4, -2));
console.log(array3);

array3.splice(6, 0, "777", "888");
console.log(array3);

/*
Arrays Methods [Joining]
- Concat(array, array) => Return A New Array
- join(Separator)
*/

let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Mohamed"];
let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];

let allFriends = myFriends.concat(
  myNewFriends,
  schoolFriends,
  "Gameel",
  [1, 2]
);

console.log(allFriends);

console.log(allFriends.join());
console.log(allFriends.join(""));
console.log(allFriends.join(" @ "));
console.log(allFriends.join("|"));
console.log(allFriends.join("|").toUpperCase());
console.log(typeof allFriends.join("|").toUpperCase());

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*********** Loop 
-*- For
  for ([1] [2] [3] ) {
    // Block Of Code
  }
  [1] => Initialization
  [2] => Condition
  [3] => Action
  i++ => i += 1 => i = i + 1;
*/

for (let i = 0; i < 10; i += 1) {
  console.log(i);
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
  Loop
  -*- Loop On Sequences
 */

let myBoys = [1, 2, "Osama", "Ahmed", "Sayed", "Ali", "Amira"];

let onlyNames = [];

for (let i = 0; i < myBoys.length; i += 1) {
  console.log(myBoys[i]);
}

for (let i = 0; i < myBoys.length; i++) {
  if (typeof myBoys[i] === "string") {
    onlyNames.push(myBoys[i]);
  }
}
console.log(onlyNames);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/**Testing**/

let looping = ["hi", 00, "How", 1, 2, "Are", "you", 3, 4, "?"];
let none = [];

for (let i = 0; i < looping.length; i++) {
  if (typeof looping[i] === "string") {
    none.push(looping[i]);
  }
}
console.log(none.join(" "));

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* Loop
-*- Nested Loops
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];

let models = [2020, 2021];

for (let i = 0; i < products.length; i++) {
  console.log("#".repeat(20));
  console.log(`# ${products[i]}`);
  console.log("#".repeat(20));
  console.log("Colors: ");
  for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
  }
  console.log("Models: ");
  for (let k = 0; k < models.length; k++) {
    console.log(`// ${models[k]}`);
  }
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
Loop Control
- Break
- Conuinue
- Label
*/

let productss = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colorss = ["Red", "Green", "Black"];
console.log("-".repeat(40));

mainLoop: for (let i = 0; i < productss.length; i++) {
  console.log(productss[i]);
  nestedLoop: for (let j = 0; j < colorss.length; j++) {
    console.log(`- ${colorss[j]}`);
    if (colorss[j] === "Green") {
      break mainLoop;
    }
  }
}
console.log("-".repeat(40));

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
Loop For Advances Example
*/

let pro = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iphone"];
let g = 0;

for (;;) {
  console.log(pro[g]);
  g += 2;
  if (g === pro.length) break;
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Loop
- Products Practice
*/

let products1 = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iphone"];
let colors1 = ["Red", "Green", "Blue"];
let shwoCount = 3;

document.write(`<h1>Shwo ${shwoCount} Profucts</h1>`);

for (let i = 0; i < shwoCount; i++) {
  document.write(`<div>`);
  document.write(`<h3>[${i + 1}] ${products1[i]}</h3>`);
  for (let j = 0; j < colors1.length; j++) {
    document.write(`<p>${colors1[j]}</p>`);
  }
  document.write(`<p>${colors1.join(" | ")}</p>`);
  document.write(`</div>`);
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Loop
- While
*/

let Pro = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iphone"];
let i = 0;

while (i < Pro.length) {
  console.log(Pro[i]);
  i += 1;
}
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Loop
- Do / While
*/

let Pro1 = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iphone"];
let l = 0;

do {
  console.log(l);
  l += 1;
} while (false);

console.log(l);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
Function
- What Is Function?
- User-Defined vs Built In
- Syntax + Basic Usage
- Parameter + Argument
- Practical Example
*/

function sayHello(userName) {
  // userName: Is a Parameter => like The Variable
  console.log(`Hello ${userName}`);
}

// To Call The Function =>
sayHello("Osama"); // Osama Is An Argument => The Value Of The Parameter(Variable)
sayHello("Sayed");
sayHello("Ali");

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Function Advanced Examples

function sayHi(userName1, age) {
  if (age <= 18) {
    console.log(`This App Is Not Suitable For You`);
  } else {
    console.log(`Hello ${userName1} Your Age is ${age}`);
  }
}

sayHi("Osama", 40);
sayHi("Ahmed", 30);
sayHi("Ali", 17);

function generateYears(start, end, exclude) {
  for (let i = start; i <= end; i++) {
    if (i === exclude) {
      continue;
    } else {
      console.log(i);
    }
  }
}

generateYears(2010, 2022, 2020);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Function
- Return
- Automatic Semicolon Insertion [No Line Terminator Allowed]
- Interruptting
*/

function calc(num1, num2) {
  return num1 + num2;
}

let result1 = calc(10, 20);

console.log(result1 + 100);

function generate(start, end) {
  for (let i = start; i <= end; i += 2) {
    if (i === 16) {
      return `Interruptting`;
    } else {
      console.log(i);
    }
  }
}

generate(0, 20);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
Function
- Default Function Parameters
- Function Parameters Default [Undefined]
- Old Strategies [Condition + Logical Or] =>  1- if (age === undefined) {age = "Unknown";} 2- age = age || "Unknown";
- ES6 Method => Or we can simply give any Parameters a default Value
*/

function sayHallo(userName = "Unknown", age = "Unknown") {
  return `Hello ${userName} Your Age Is ${age}`;
}

console.log(sayHallo());

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
Function
- Rest Parameters
- Only One Allowed
- Must Be Last Element
*/

function calc1(...numbers) {
  // console.log(Array.isArray(numbers));
  let ergebniss = 0;
  for (let i = 0; i < numbers.length; i++) {
    ergebniss += numbers[i]; // ergebniss = ergebniss + numbers[i]
  }
  return `Final Result Is ${ergebniss}`;
}

console.log(calc1(10, 20, 30, 40, 50, 50, 200, 20, 5000));

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
Function Advanced Practice
- Parameters
- Default
- Rest
- Loop
- Condition
*/

function showInfo(us = "Un", ag = "Un", rt = "0", show = "Yes", ...sk) {
  document.write(`<div>`);
  document.write(`<h2>Welcome, ${us}</h2>`);
  document.write(`<p>Age: ${ag}</p>`);
  document.write(`<p>Hour Rate: $${rt}</p>`);
  if (show === "Yes") {
    if (sk.length > 0) {
      // document.write(`<p>${sk.join(" | ")}</p>`);
      for (let i = 0; i < sk.length; i++) {
        document.write(`<p>${sk[i]}</p>`);
      }
    } else {
      document.write(`<p>Skills: No Skills</p>`);
    }
  } else {
    if (sk.length > 0) {
      document.write(`<p>Skills Is Hidden</p>`);
    } else {
      document.write(`<p>Skills: No Skills</p>`);
    }
  }
  document.write(`</div>`);
}

showInfo("Eyas", 25, 15, "Yes", "Html", "Css", "JavaScript");

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// for (let i = 0; i < sk.length; i++) {
//   document.write(`<p>${sk[i]}</p>`);
// }

//--------------------------------------------------------------------------------------------

function createSelectBox(startYear, endYear) {
  document.write(`<select>`);

  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value=${[i]}>${[i]}</option>`);
  }

  document.write(`</select>`);
}
createSelectBox(2000, 2021);

//--------------------------------------------------------------------------------------------

function multiply(...Numbers) {
  let re = 1;
  for (let i = 0; i < Numbers.length; i++) {
    if (typeof Numbers[i] === "string") {
      continue;
    } else {
      re *= Math.trunc(Numbers[i]);
    }
  }
  console.log(re);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
multiply("d", 100.5, "f", 10, "r", 55, 5, "B");
multiply("d", 100, "f", 10.5454, "r", 5, "B");
multiply("d", 100, "f", 10.5454, "r", 5, "B");

//--------------------------------------------------------------------------------------------
// JS Bootcamp: Random Arguments Function Challenge

function checkStatus(a, b, c) {
  let theData = [a, b, c];
  for (let i = 0; i < theData.length; i++) {
    if (typeof theData[i] === "string") {
      theName = theData[i];
    } else if (typeof theData[i] === "number") {
      theAge = theData[i];
    } else if (typeof theData[i] === "boolean" && theData[i] === true) {
      theStatus = "Available";
    } else {
      theStatus = "Not Available";
    }
  }
  console.log(
    `Hello ${theName}, Your Age Is ${theAge}, You Are ${theStatus} For Hire`
  );
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
checkStatus(25, false, "Ali");
checkStatus(25, true, "Eyas");
checkStatus("Anas", true, 27);

//--------------------------------------------------------------------------------------------
/*
Function
  - Anonymous Function
  - Calling Named Function vs Anonymous Function
  - Argument To Other Function
  - Task Without Name
  - SetTimeout
*/

let calculator = function (num1, num2) {
  return num1 + num2;
}
console.log(calculator(10, 20));

function sayHello() {
  console.log("Hello Osama");
}
document.getElementById("show").onclick = sayHello;


setTimeout(function () {
  console.log("Good");
}, 2000);

//--------------------------------------------------------------------------------------------

/*
  Function
  - Function Inside Function
  - Return Function
  */



// Example 1

console.log(`Hello Osama Mohamed`);


// Example 2
function sayMessage(fName, lName) {
  return `Hello ${fName} ${lName}`;
}
console.log(sayMessage("Osama", "Mohamed"));


// Example 3
function sayMessage(fName, lName) {
let message = `Hello`;

  function concatmsg() {
    message = `${message} ${fName} ${lName}`;
  }
  concatmsg();
  return message;
}
console.log(sayMessage("Osama", "Mohamed"));


// // Example 4
function sayMessage(fName, lName) {
  let message = `Hello`;

  function concatmsg() {
    return `${message} ${fName} ${lName}`;
  }
  return concatmsg();
}
console.log(sayMessage("Osama", "Mohamed"));


// // Example 5
function sayMessage(fName, lName) {
  let message = `Hello`;

  function concatmsg() {
    function getFullName() {
      return `${fName} ${lName}`;
    }
  return `${message} ${getFullName()}`;
  }
  return concatmsg();
}
console.log(sayMessage("Osama", "Mohamed"));


//--------------------------------------------------------------------------------------------

/*
  Function
  - Arrow Function
  -- Regular vs Arrow [Param + No Param]
  -- Multiple Lines
*/

// Example 1
let print1 = function () {
  return 10;
}
// --------------------------------
let print2 = _ => 10;
console.log(print2());


// Example 2
let print3 = function (num) {
  return num;
}
// --------------------------------
let print4 = num => num;

console.log(print4(100));


// Example 3
let print5 = function (num1, num2) {
  return num1 + num2;
}
// --------------------------------
let print6 = (num1, num2) => num1 + num2;

console.log(print6(100, 50));


//--------------------------------------------------------------------------------------------

/*
  Function
  - Global And Local Scope
*/

var ä = 1;
let ö = 2;

function shwoText() {
  var ä = 10;
  let ö = 20;
  console.log(`Function - Form Local ${ä}`);
  console.log(`Function - Form Local ${ö}`);
}

console.log(`Form Global ${ä}`);
console.log(`Form Global ${ö}`);

shwoText();

//--------------------------------------------------------------------------------------------

/*
  Scope
  - Block Scope [iF, Switch, For]
*/   

var x = 10;

if (10 === 10) {
  let x = 50;
  console.log(`Form If Block ${x}`);
}
console.log(`Form Global ${x}`)

//--------------------------------------------------------------------------------------------

/*
  Scope
  - Lexical Scope

  Search
  - Execution Context
  - Lexical Environment
*/

function parent() {
  let a = 10;
  let b = 20;
  console.log(`Form Parent ${a}`);
  console.log(`Form Parent ${b}`);

  function child() {
    let a = 10;
    console.log(`Form Child ${a}`);
    console.log(`Form Child ${b}`);

    function grand() {
      let b = 30;
      console.log(`Form grand ${a}`);
      console.log(`Form grand ${b}`);
    }
    grand()
  }
  child()
}
parent()
//--------------------------------------------------------------------------------------------
// تكليفات JavaScript Bootcamp من الدرس 064 إلى 070

function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    return `Hello ${zName.substring(0, 5)} ${zName.charAt(6).toUpperCase()}.`;
  }
  function ageWithMessage(zAge) {
    return `Your Age Is ${parseInt(zAge)},`;
  }
  function countryTwoLetters(zCountry) {
    return `You Live In ${zCountry.charAt(0).toUpperCase()}${zCountry.charAt(1).toUpperCase()}.`;
  }
  function fullDetails() {
    return `${namePattern(zName)} ${ageWithMessage(zAge)} ${countryTwoLetters(zCountry)}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
console.log(getDetails("Bahaa qassem", "28 Is The Age", "Deutschland"));
// Hello Bahaa Q., Your Age Is 28, You Live In DE

// ------------------------------------------------------------------------- 
