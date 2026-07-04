// script.js
function check() {

   // Password variables including score counter
   let score = 0;
   let int = /[0-9]/;
   let upperCaseLetters = /[A-Z]/;
   let lowerCaseLetters = /[a-z]/;
   let symbols = /[!@#$%^&*()]/;

   // Get input from variable
   const password = document.getElementById("passwordInput").value;

   if (password.value === "") {
      alert("Please enter a password.");
      document.getElementById("passwordScore").style.color = `red`;
      score = 0;

   } else if (password.length < 8) {
      alert("Password must be at least 8 characters.");
      document.getElementById("passwordScore").style.color = `red`;
      score = 25;

   } else if (password.match(int) && password.match(upperCaseLetters)) {
      alert("Password only has int and upperCaseLetters");
      document.getElementById("passwordScore").style.color = `orange`;
      score = 50;

   } else if(password.match(int) && password.match(upperCaseLetters) && password.match(lowerCaseLetters)) {
      alert("Password has int, upperCaseLetters, and lowerCaseLetters");
      document.getElementById("passwordScore").style.color = `yellow`;
      score = 75;

   } else if (password.match(int) && password.match(upperCaseLetters) && password.match(lowerCaseLetters) && password.match(symbols)) {
      alert("Password is secured");
      document.getElementById("passwordScore").style.color = `green`;
      score = 100;
   }

   document.getElementById("passwordScore").innerHTML = `Password Strength: ${score}%`;
};
