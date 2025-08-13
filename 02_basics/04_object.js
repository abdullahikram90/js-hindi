const skype = new Object() //single ton object
console.log(skype);

const skype1 = {} //non single ton object
console.log(skype1);


const regularuser = {
    email: "some@gmail.com",
    fullname:{                    //object in object
        firstname:"abdullah",
        lastname:"ikram"
    }
}
console.log(regularuser);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj4 = {5:"e", 6:"f"}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);


const navbar = ({comapany}) =>{}  //desturcturing 
navbar(comapany="devicen")

