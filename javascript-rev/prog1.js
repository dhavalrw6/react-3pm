// let arr = [10, 20, 30, 40];

// let obj = {
//     name: "John",
//     age: 21,
//     item: ["apple", "banana", "orange"],
//     sum : (a,b)=>{
//         return a+b;
//     },
//     stud : {
//         name : "Pratham"
//     }
// }

// let obj1 = {
//     1 : "dhaval",
//     2 : "Raj",
//     3 : "Tushar"
// }
// let arr = [1, 2, 3, 4, 5];
// let arr1 = [6, 7, 8];
// let arr3 = [63, 47, 58];
// // let arr2 = arr.join(" and ");
// let arr2 = arr.concat(arr1,arr3);

// let item = ["apple", "banana", "orange"];

// for(let i=0;i<item.length;i++)
//     {
//         console.log(item[i]);
//     }


// for (let val of item) {
//     console.log(val);
// }

// item.forEach((value, index) => {
//     console.log(value);
// })

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let data = arr.reduce((val)=>{
//     return val+5;
// })

let data = arr.map((val, i) => {

    return val += 5;
})



console.log(data);