let promise = new Promise(function (resolve,reject) {
    let x = 0;
    
    if (x == 0){
        resolve("OK");
    } else{
        reject("Error");
    }
});

promise.then(
    function (value) {
        console.log(value);
    },
    function (error) {
        console.log(error);
    }
)