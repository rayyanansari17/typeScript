// functions in TypeScript

function addTwo(num: number){ 
    return num + 2
}


function getUpper(val: string){
    return val.toUpperCase()
}
getUpper("rayyan")
addTwo(5)

// arrow fucntions 

let details = (name: string, isAlive: true) => {
    return (`${name} \n${isAlive}`)   
}

let output = details("rayyan", true);
console.log(output);



function addTwo1(num: number): number { 
    return num + 2
    // return "hello"
}
let result = addTwo1(6) 


// below is the senario where you try to have multiple types but also cannot define the function a specific type 


function getvalue(val: number){
    if(val >5){
        return true
    }
    return "200 OK"
}



// basic working function is TS

const getHello = () => {
    return ""
}