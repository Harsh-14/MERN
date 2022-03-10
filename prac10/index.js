var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Updated Hello content!', function (err) {
if (err) throw err;
console.log('Saved!');
});

fs.open('mynewfile2.txt', 'w', function (err, file) {
if (err) throw err;
console.log("Open File")
//console.log(file);
});

fs.writeFile('mynewfile3.txt', 'Updated This is my text', function (err) {
if (err) throw err;
console.log('Replaced!');
});

// fs.unlink('mynewfile3.txt', function (err) {
// if (err) throw err;
// console.log('Deleted!');
// });
fs.rename('mynewfile1.txt','mynewfile0.txt', function (err) {
if (err) throw err;
console.log('Rename!');
});


var util = require('util');
var my_name = 'abc',
my_class = 5,
my_roll_no = 11,
my_fav_subject= { subj1: 'English', subj2: 'Math.'};
var format1 = util.format('My name is %s ',my_name);
var format2 = util.format('I read in class %d,',my_class);
var format3 = util.format('My roll no. is %d,',my_roll_no);
var format4 = util.format('My favorite subjects are %j',my_fav_subject);
console.log(format1);
console.log(format2);
console.log(format3);
console.log(format4);


const path = require('path')

console.log(require('path').basename('./public/sdindex.html'))
console.log(require('path').extname('./public/sdindex.html') )
console.log(require('path').isAbsolute('/public/sdindex.html'))
console.log(require('path').isAbsolute('./public/sdindex.html'))
const name = 'xyz'
console.log(require('path').join('/', 'users', name, 'notes.txt'))
var os = require('os');
console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());