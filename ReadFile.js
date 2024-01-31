// First, require the file system to create a file named "welcome.txt" containing one line "Hello Node".
// Second, create a program that reads and console.log data from hello.txt
var fs=require('fs')
var data=fs.readFileSync('welcome.txt','utf-8')
console.log(data)