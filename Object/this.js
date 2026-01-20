// this keyword is object
// this keyword is pointer
// this keyword near scope and object placed point

// function sayMyAge(){
//     console.log(person.age)
// }

// var person = {
//     name: "abhishek",
//     age: 24,
//     sayMyAge: function () {
//         console.log(this.age);
//     }
// };


// var person1 = {
//     name: "abhishek rai",
//     age: 23,
//     sayMyAge: person.sayMyAge
// };

// person.sayMyAge(); // 24
// person1.sayMyAge();

// console.log(this)

// var a=10;
// console.log(this.a)


console.log(this)
var age=60
var person={
    fName: "abhishek",
    lNamwe: "pandey",
    age: 28,
    sayMyName: function(){
        console.log(this.fName+" "+this.lNamwe)
    },
    sayMyAge: ()=>{
        console.log(this.age)
    }
}
person.sayMyName()
person.sayMyAge()