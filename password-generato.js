
// Create a file named "password-generator"  
// (use npm install generate-password : (https://www.npmjs.com/package/generate-password)

// Create a function that generates random passwords and console.log() that password.



const generatePassword = require('generate-password');


function generateRandomPassword() {
  const password = generatePassword.generate({ length: 12, numbers: true });
  console.log('Generated Password:', password);
}


generateRandomPassword();
