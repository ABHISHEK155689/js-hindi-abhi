// map 
// var arr=[3,4,5,6,7,8,9]
// var arr1=[]
// for(let i=0; i<arr.length; i++){
//     arr1[i]=arr[i]*2
// }
// console.log(arr1)



// var arr=[3,4,5,6,7,8,9]

// var arr1=arr.map((x,i)=>{
//     return x*2
// })
// console.log(arr1)



// var arr1=arr.map(function(item,index){
// //     console.log(item,index)

//      return item*2
//  })
//  console.log(arr1)



// var arr=[3,4,5,6,7,8,9,10]
// var arr1=arr.map((x)=>x>1)
// console.log(arr1)


// filter method


// var arr=[3,4,5,6,7,8,9]
// var arr1=arr.filter((item,index)=>{
//     // return item>3
//     return item%2!==0
// })
// console.log(arr1)



// reduced method in the array

var arr=[3,4,5,6,7,8,9]
var sum=arr.reduce(function(total,item,index){
    return total *=item
},100)
console.log(sum)
