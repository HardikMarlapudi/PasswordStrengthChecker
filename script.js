// script.js
function check() {

   // Password variables including score counter
   let score = 0;
   let int = /1234567890/;
   let upperCaseLetters = /ABCDEFGHIJKLMNOPQRSTUVWXYZ/;
   let lowerCaseLetters = /abcdefghijklmnopqrstuvwxyz/;
   let symbols = /[!@#$%^&*()]/;

   // Get password input from variable
   const password = document.getElementById("passwordInput").value;

   // Password input is empty
   if (password == "") {
      alert("Please enter a password");
      document.getElementById("passwordScore").style.color = `red`;
      score = 0;

   // Password is less than 8 characters
   } else if (password.length < 8) {
      alert(`Password should be at least 8 characters long`);
      document.getElementById("passwordScore").style.color = `red`;
      score = 25;

   // Password contains only int and upperCaseLetter characters
   } else if (password.match(int) || password.match(upperCaseLetters)) {
      alert("Password only contains int and uppercaseLetters");
      document.getElementById("passwordScore").style.color = `orange`;
      score = 50;

   // Password contains at least one integer, one upperCaseLetter, and one lowerCaseLetter
   } else if (password.match(int) || password.match(upperCaseLetters) || password.match(lowerCaseLetters)) {
      alert("Password contains int, uppercase and lowercase letters");
      document.getElementById("passwordScore").style.color = `yellow`;
      score = 75;

   // Password that meets all of the requirements
   } else if (password.match(int) || password.match(upperCaseLetters) || password.match(lowerCaseLetters) || password.match(symbols)) {
      alert("Password is secure");
      document.getElementById("passwordScore").style.color = `green`;
      score = 100;

   // Invalid input
   } else {
      alert("Invalid input");
      document.getElementById("passwordScore").style.color = `red`;
      score = 0;
   };

   // Updates the UI along with the passwordScore percentage
   document.getElementById("passwordScore").innerHTML = `Password Strength: ${score}%`;
};
