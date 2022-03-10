require('dotenv').config();
console.log(process.env.a)
const a = parseInt(process.env.a);
const b = parseInt(process.argv[2]);
console.log(b)
  if (a>b) {
    console.log('a is Maximum');
  } else if (a<b) {
    console.log('b is maximum');
  } else {
    console.log('both are same');
  }


const prompt = require("prompt-sync")({ sigint: true });
//With readline
const c = parseInt(prompt("What is your choice?"));

  switch(c)
  {
    case 1:
        console.log('Case 1');
      break;
    case 2:
        console.log('Case 2');
      break;
    default:
        console.log('Default Case');
  }
 
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  readline.question(`What's your Name?`, name => {
    console.log(`Hi ${name}!`)
    readline.close()
  })