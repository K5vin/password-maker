const dataLowerCase = "azertyuiopmlkjhgfdsqwxcvbn";
const dataUpperCase = dataLowerCase.toUpperCase();
const dataNumbers = "1234567890";
const dataSymbols = "@#&(§!%*$£%+/.?,;:=$)";
const passwordOutput = document.getElementById("password-output");
const rangeValue = document.getElementById("password-length");

const generatePassword = () => {
  let data = [];
  let password = "";
  lowercase.checked ? data.push(...dataLowerCase) : alert("cochez une case");
  uppercase.checked ? data.push(...dataUpperCase) : 0;
  numbers.checked ? data.push(...dataNumbers) : 0;
  symbols.checked ? data.push(...dataSymbols) : 0;

  if (data.length === 0) {
    console.log("data === 0");
    return;
  }

  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }
  passwordOutput.value = password;
  passwordOutput.select();
  navigator.clipboard.writeText(passwordOutput.value);
  window.getSelection().empty();
};

generateButton.addEventListener("click", () => {
  generatePassword();
});
