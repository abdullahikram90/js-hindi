function saymyname(){
    console.log("a");
    console.log("b");
    console.log("d");
    console.log("u");
    console.log("l");
    console.log("l");
    console.log("a");
    console.log("h");
    
}
saymyname()



function addtwonumber(number1, number2){
    console.log(number1 + number2);
}
addtwonumber(7,null)




function loginusermessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return
        
    }
    return `${username} just logged in`
}
console.log(loginusermessage());


function calculatecartprice(...num1){                          // ...doted are the rest operator 
    return  num1
}
console.log(calculatecartprice(200,400,600,700));



const user = {
    username: "abdullah",
    price: 3333
}

function mycart(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
mycart()