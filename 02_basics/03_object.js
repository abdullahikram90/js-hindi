// object litrals

const user = {
    name  : "Abduallah",
    age : 23,
    location : "multan",
    email: "abdullah@gamil.com",
    isLoggedin: false,
    lastlogindays: ["monday", "wednesday"]
}

console.log(user.lastlogindays);
// another method for run the command
console.log(user["email"]);

user.greeding = function() {
    console.log("hello Js user");
}

user.greedingtwo = function(){
    console.log(`hello js user, ${this.email}`);
    
}

console.log(user.greeding());
console.log(user.greedingtwo());

