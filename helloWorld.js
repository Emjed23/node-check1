
// Create a file named hello-world.js
// Write a program to print "HELLO WORLD" to the console


var fs=require("fs");

fs.writeFileSync('welcome.txt', 'Hello Node');

console.log('File "welcome.txt" created with content: Hello Node');