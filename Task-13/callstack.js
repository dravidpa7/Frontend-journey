// call stack 

// example one 

function one(){
    console.log("First one");
    two();
}

function two(){
    console.log("two one");
    three();
}

function three(){
    console.log("three one");
}

one(); // make a break point here and view diffrence in console
two();
three();