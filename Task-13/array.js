// console.log(`
// #   #  #####  #       #       #####   
// #   #  #      #       #       #   #  
// #####  #####  #       #       #   #
// #   #  #      #       #       #   #
// #   #  #####  #####   #####   #####

// ####   #####  #   #   #### 
// #   #  #      #   #  #     
// #   #  #####  #   #   #### 
// #   #  #       # #        #  
// ####   #####    #     #### 
// `);


// fetch('data.json')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data); // { name: "Alice", age: 30 }
//   })
//   .catch(error => console.error('Error:', error));

//deconstruct array

let arr=[1,2,3]
let [a,b,c]=arr

console.log(a)

let obj =[
    {
        name:"Dravid",
        age : 20,
        isAvailable: true
    },
    {
        name:"Test",
        age:11
    }
]

let {name,age,isAvailable,default1="tamil"}=obj
console.log(name)

let array = [1,2,3,4,5,6]
let arrayCopy = [...array]
console.log(arrayCopy)

let newArray = [...array,...arrayCopy]
console.log(newArray)

let newObj = obj

// this is used only for multiple obj
console.log(...newObj)

