// var perso = {
//     fName: "abhishek",
//     lName: "Rashed",
//     age: 28

// }

// // for(let key in perso){
// //     console.log(key)
// //     console.log(perso[key])
// }
// var a=Object.getOwnPropertyDescriptor(perso)
// console.log(a)

// Object.defineProperty(perso,"lName",{
//     value:"Dar",
//     enumerable:false
// })

// var a=Object.getOwnPropertyDescriptor(perso)
// console.log(a)




// var perso = {
//     fName: "abhishek",
//     lName: "Rashed",
//     age: 28
// };

// // descriptor BEFORE change
// var a = Object.getOwnPropertyDescriptor(perso, "lName");
// console.log(a);

// Object.defineProperty(perso, "lName", {
//     value: "Dar",
//     enumerable: false
// });

// // descriptor AFTER change
// var a = Object.getOwnPropertyDescriptor(perso, "lName");
// console.log(a);




// var perso = {
//     fName: "abhishek",
//     lName: "Rashed",
//     age: 28
// };

// // for...in loop (key is just a variable name)
// for (let key in perso) {
//     console.log(key);        // property name
//     console.log(perso[key]); // property value
// }

// // get property descriptor BEFORE change
// var desc1 = Object.getOwnPropertyDescriptor(perso, "lName");
// console.log(desc1);

// // redefine property
// Object.defineProperty(perso, "lName", {
//     value: "Dar",
//     enumerable: false
// });

// // get property descriptor AFTER change
// var desc2 = Object.getOwnPropertyDescriptor(perso, "lName");
// console.log(desc2);

// // check loop again (lName will not appear)
// for (let key in perso) {
//     console.log(key);
// }

// // direct access still works
// console.log(perso.lName); // Dar






// var perso = {
//     fName: "abhishek",
//     lName: "Rashed",
//     age: 28
// };

// // BEFORE change
// console.log(Object.getOwnPropertyDescriptor(perso, "lName"));

// Object.defineProperty(perso, "lName", {
//     value: "Dar",
//     writable: false,
//     enumerable: false,
//     configurable: false
// });

// // AFTER change
// console.log(Object.getOwnPropertyDescriptor(perso, "lName"));

// // try to change value
// perso.lName = "Pandey";
// console.log(perso.lName); // Dar (not changed)




// Object.defineProperty(perso, "age", {
//     enumerable: false
// });

// console.log(Object.entries(perso));



// var arr = [
//     ["name", "Abhishek"],
//     ["age", 28],
//     ["city", "Delhi"]
// ];

// var obj = Object.fromEntries(arr);
// console.log(obj);


// var obj1 = {
//     name: "Abhi",
//     address: { city: "Delhi" }
// };

// var obj2 = Object.assign({}, obj1);

// obj2.address.city = "Mumbai";

// console.log(obj1.address.city); // Mumbai ❌


