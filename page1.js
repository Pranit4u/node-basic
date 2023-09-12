/*  Passing function as argument  -  callback  */

function callOtherFunction(f) {
    console.log("going to call the other function...");
    f();
}

function calleeFunction() {
    console.log("Function is called!");
}

callOtherFunction(calleeFunction);  //two ways


/*  function declaration    */

var foo1 = function (){
    console.log("foo1 is called");
}

var foo2 = () => {
    console.log("foo2 is called");
}