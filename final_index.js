const changeFocus1 = () => {
    let phone1 = document.getElementById("p1").value
    if(phone1.length == 3){
        document.getElementById("p2").focus()
    }
}
const changeFocus2 = () => {
    let phone2 = document.getElementById("p2").value
    if(phone2.length == 4){
        document.getElementById("p3").focus()
    }
}
const checkValidation = () => {
    let p1 = document.getElementById("p1").value
    let p2 = document.getElementById("p2").value
    let p3 = document.getElementById("p3").value
    if(p1 !== "" && p2 !== "" && p3!== ""){
        document.getElementById("send").style = "background-color : #ffffff;  color : #0068ff; cursor : pointer;"
        document.getElementById("send").removeAttribute("disabled")

    }

}
let auth = ()=> {
    const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
    document.getElementById("target").innerText = token
    document.getElementById("target").style.color = "#" + token
}
let time = 180
setInterval(function(){
    if(time>=0){
        let min = Math.floor(time/60)
        let sec = String(time % 60).padStart(2,"0")
        console.log(min + ":" + sec)
        time = time -1
    }
},1000)
function signup(){
    const email = document.getElementById("email").value
    const writer = document.getElementById("writer").value
    const password1 = document.getElementById("password1").value
    const password2 = document.getElementById("password2").value
    const woman = document.getElementById("woman").checked
    const man = document.getElementById("man").checked

    let isValid =true
    if(email.includes("@") === false){
        document.getElementById(email).innerText ="이메일이 올바르지 않습니다."
        isValid = false
    }else{
        document.getElementById("email").innerText=""
    }

}