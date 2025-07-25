// console.log("start");
// for(let i=0;i<3;i++){
//     console.log(i);
// }
// console.log("end")

// setTimeout(()=>{
//     console.log("Async")
// },1000)

// setTimeout(()=>{
//     console.log("Hii")
// },2000)

// function step1(callback){
//     setTimeout(()=>{
//         console.log("Step 1");
//         callback()
//     },1000)
// }

// function step2(callback){
//     setTimeout(()=>{
//         console.log("Step 2");
//         callback()
//         console.log("Step 3");
//     },1000)
// }

// step1(()=>{
//     step2(()=>{
//         console.log("jiiii")
//     })
//     console.log("Hiiii")
// })


// let promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let msg=true;
//         if(msg){
//             resolve("Data fetched")
//         }
//         else{
//             reject("Error occured")
//         }
//     })
// })

// promise.then(response=>console.log(response)).catch(response=>console.log(response))


// function step1(callback){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Test case Passed 1")
//             resolve();
//         },2000)
//     })
// }

// function step2(callback){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Test case failed 2")
//             reject("Sample");
//         },2000)
//     })
// }

// step1((response)=>console.log(response))
//     .then(()=>step2())
    
//     .catch((error) => {
//             console.log("error while fectching");
//     })

//     .then(()=>{
//         console.log("Function 2 not executed");
//     })



// function fetchData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let msg=false;
//             if(msg){
//                 resolve("Data Fetched")
//             }
//             else{
//                 reject("While Fetch")
//             }
//         },10000)
//     })
// }

// async function process(){
//     try{
//         console.log("start")
//         let data = await fetchData();
//         console.log(data)
//         console.log("end")
//     }
//     catch(error){
//         console.log(`Error occured : ${error}`)
//     }
// }

// process()


