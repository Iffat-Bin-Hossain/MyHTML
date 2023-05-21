//global scope
var x='dev-mohan'
console.log(x)
//local scope
function Func(){
    var y='Dushwant'
    console.log(y)
    console.log(x)
}
//console.log(y)
Func()
{
    let z='30'
    console.log(z)
}
