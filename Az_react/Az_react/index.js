console.log("hi,raghu");



function myfunction(fname, lname){
    // console.log("welcome " + fname + " " + lname);
    console.log(`welcome ${fname} ${lname}`);
}
myfunction('Raghuwinder', 'Kumar');


function ArthimeticOperation(a, b){
    console.log(`the addition of ${a} and ${b} is ${a + b}`);
    console.log(`the subtraction of ${a} and ${b} is ${a - b}`);
    console.log(`the multiplication of ${a} and ${b} is ${a * b}`);
    console.log(`the division of ${a} and ${b} is ${a / b}`);
}
ArthimeticOperation(11,22);

// create a functionn whcih  will return *3 if odd else *2 if num is even
const myname = (n) => n % 2 == 0 ? 2*n: 3*n;
console.log(myname(5));
console.log(myname(4));
console.log(myname(11));