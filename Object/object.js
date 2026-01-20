// var person={
//     fName: "abhishek pandey",
//     age: 24,
//     isMarried: false,
//     city:{ 
//         name:"gorakhpur",
//     qualification: "b.tech",
//     Streem: "cse",
//     place: {
//         places: "lucknow",
//         hobbies: "good enjoy",
//         roadMap: "good and active",
//     }
//     },
//     skill: ["html","css","Js"],
// }

// console.log(person.city.place.places)


var person={
    fName: "abhishek pandey",
    age: 24,
    isMarried: false,
    city: "gorakhpur",
    qualification: "b.tech",
    Streem: "cse",
    sayMyName: function(){
      console.log(this.fName+' '+person.age)  
    return 8
    }
}

// console.log(person.sayMyName())
// person.sayMyName()
person.sayMyName()

