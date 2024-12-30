//Data types are primarily classified as :
// 1. Primitive
// 2. Reference


// Primitive (copy is passed)

// 7 types : String,Number,Boolean,null,undefined,Symbol,BigInt

const score=100;
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);

// const bigNumber=3423456789345678454095405n




//Reference(Non Primitive( address is passed of original))

//Array, Objects,Functions

               // Array
const heros=["shaktiman","naagraj","doga"]

               //Objects
let myObj = {
name:"hitesh",
age:22,

}

                 //Function
const myFunction = function(){
    console.log("Hello");
}

console.log(typeof bigNumber)

// null ka typeof se data type object aayga

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive(copy milega)), Heap(Non-Primitive(reference milega, changes original values pe hoga))


let myYotubename = "mohit.com"

let anothername= myYoutubename

anothername="chaiaurcode"

console.log(myYotubename);
console.log(anothername);

let userOne={
    email:"user@gmail.com",
    upi:"user@ybl"
}
let userTwo = userOne
userTwo.email="loloo@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
