/*
  [1] Set Characters To Create The Serial
  [2] Set Serial Characters Count
  [3] Create Empty Variable To Store The Serial
  [4] Create Random Number + Access Sequence
  [5] Store The Random ELement in The Empty Variable
  [6] Loop x Count
  [7] Change Serial Element Content With The Serial Variable
*/

let serial = document.querySelector(".serial");
let btn = document.querySelector(".generate");

btn.addEventListener("click", () => {
  let Characters =
    "&1996abcdefghijklmnopqrstuvwxyz!07ABCDEFGHIJKLMNOPQRSTUVWXYZ06@";
  let charCount = "10";
  let randomSerial = "";

  for (let i = 0; i < charCount; i++) {
    let randomNum = Math.floor(Math.random() * Characters.length);
    randomSerial += Characters[randomNum];
  }
  serial.innerHTML = randomSerial;
});
