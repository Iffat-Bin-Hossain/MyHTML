//using var permit both reassign and redeclare
var x=10
console.log(x)
//redeclaration
var x='nabil'
console.log(x)
//reassign
x=true
console.log(x)

//using let permit reassign but not redeclare
let y=20
console.log(y)
 y='Sadin'
 console.log(y)

 //using const does not permit neither reassign nor redeclare 
const z=30
console.log(z)

const obj={name:'nabil'}
// obj={age:20}
// console.log(obj.age)//not allowed
obj.name='neyat'
console.log(obj.name)