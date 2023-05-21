var name="Iffat bin hossain"

//Make Uppercase
Uname=name.toUpperCase()
console.log(Uname)

//Make Lowercase
Lname=name.toLowerCase()
console.log(Lname)


var friends="Nabil,Tutul,Labib,Pratik"

//Splitting
console.log(friends)
console.log(friends.split(","))

//Index function
console.log(friends.indexOf('T'))

//String to Number
var num1="55.7884"
console.log(typeof num1)
num1=parseFloat(num1)
console.log(typeof num1)
var num2=99
total=num1+num2
console.log(total)

//Number to String
var str1="55.7884"
var str2=99.99
console.log(typeof str2)
str2=''+str2
console.log(typeof str2)
total=str1+str2
console.log(total)

//absolute Function
var num1=40
var num2=-50
console.log(Math.abs(num1))
console.log(Math.abs(num2))

//Round function
console.log(Math.round(5.499))
console.log(Math.round(5.69))
console.log(Math.round(5.5))

//Ceil-Floor Function
console.log(Math.ceil(14.767))
console.log(Math.floor(14.767))

//Random number generator
console.log(Math.random())