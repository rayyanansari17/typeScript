 let greeting: string = "hello world"
 console.log(greeting);


 greeting = 6
 // the string mentioned with variable helps to pass only string as an input 

 // typescript helps to inform if a coder moves to an errors or writng an error before running a code so that we can change the rror or solve the error while writing code 

 // as you can see in line number 5 greeting was declared as string but we assigned a number to it so it gives a error before executing that greeting cannot be assigned a number as it is not declared 



 // number 

 let userId: number = 334532.3



 let userId1 = 334532.3
 userId1.toFixed() // this is number method which helps in removing of type declaration when assigning type to variable 

 // boolean 
 let isAlive: boolean = false
 isAlive.valueOf()


 // any -- used when we dont know what to place in the variable 
// any writing in a code is not a good practice so we use noimplicitany  

 let hero: string;
 function getHero(){
    return "thor"
 }

 hero = getHero()