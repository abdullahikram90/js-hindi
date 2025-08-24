let a = 400                                  // this code is gobal code
if (true) {                                  //in if all code is block of code
        let a = 30
    console.log("inner", a);
}
console.log(a);



function one() {
    const username = "abdullah"
     
    function two() {
        const website = "website"
        console.log(username);
     }  
    //  console.log(website);
     
     two()
}
one()


if (true) {
    const username = "ali"
    if (username === "ali") {
        const website = " youtube"
        console.log(username + website);
    }
    
}