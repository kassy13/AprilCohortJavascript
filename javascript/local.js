localStorage.setItem("myname", "Somtoo");
localStorage.setItem("myname", "Somtoochukwu")

console.log(localStorage.getItem("myname"));

const mylocalObj = {
    name: 'jane',
    email: "jane@gmail.com"
}
console.log(mylocalObj);
localStorage.setItem("profile", JSON.stringify(mylocalObj));

const myConvertLocalObj = JSON.parse(localStorage.getItem("profile"));
console.log(myConvertLocalObj.email);
console.log(myConvertLocalObj.name);
// localStorage.removeItem("myname");
console.log(localStorage.key(1));
// localStorage.clear()

sessionStorage.setItem("mynewname", 'sommy')