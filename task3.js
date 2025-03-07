let number = 5;


console.log("for");
for (let i = 1; i<=10; i++){
    let action = number*i;
    console.log(number + "x" + i + "=" + action );
}


 console.log(" do while");


let i = 1;
 do { 
    let action = number*i;
    console.log(number + "x" + i + "=" + action );
    i++;
   
}while(i<=10);

console.log("while");

i = 1;
 while(i<=10){ 
    let action = number*i;
    console.log(number + "x" + i + "=" + action );
    i++;
   
}