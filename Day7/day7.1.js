const prompt = require("prompt-sync")();

let value = prompt("Enter a value");
 
if(isNaN(value))
{
    console.log("not a no");
}else{
    console.log("it is no");
}