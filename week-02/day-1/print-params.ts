export {}

function printParams (...parameters: any []) {
    console.log(parameters);
    for (let i: number = 0; i < parameters.length; i++) {
        console.log(parameters[i]);
    }
}

printParams(1,2,"string",true);

//    Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)