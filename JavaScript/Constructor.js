function MyInfo(name,age,cg,isMarried){
    this.name = name,
    this.age = age,
    this.cg=cg,
    this.isMarried = isMarried
}
function showInfo(myInfo){
    console.log(myInfo.name)
    console.log(myInfo.isMarried)
    console.log(myInfo.age)
    console.log(myInfo.cg)
}
var nabilInfo=new MyInfo("Nabil",22,3.42,false)
var tutulInfo=new MyInfo("Tutul",25,4,true)
showInfo(nabilInfo)
showInfo(tutulInfo)