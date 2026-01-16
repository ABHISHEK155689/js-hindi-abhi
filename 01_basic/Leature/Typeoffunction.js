// function declaration 


// function add(a,b){
//     console.log(a+b)
// }
// add(4,4)

// function expression


// const subtract=function(a,b){
//     console.log(a-b)
// }
// console.log(subtract(10,5))


// arrow function
// const suntract=function(a,b){
//     console.log(a-b)
// }


// const sub=(x,y)=>{
//     console.log(x-y)
// }
//  sub(45,4)


// const greet=function(){
//     return "Good morning"
// }
// const greetArrow=()=>"Good morning";
// console.log(greet())

// const add=function(a,b){
//     return a+b;
// }
// const addArrow=(a,b)=>a+b;
// console.log(add(4,5))


// callback function 


// function hello(){
//     console.log("hello, welcome to the session")
// }

// function greet(a,b){
//     console.log(a)
//         b()
// }
// greet(3,function(){
//     console.log("callback")

// }) // higher order function
// greet("Good morning",hello);


(function(){
    console.log("hello , welcome to the session")
})() // immediately invoked function expression (IIFE)