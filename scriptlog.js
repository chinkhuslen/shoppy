let inMail = document.getElementById("email");
let inPass = document.getElementById("password");
let btn = document.getElementById("submitBtn")
let password = "Hi1234567890"
let email = "asd@asd.asd"

inMail.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        emailCheck();
    }
});
inPass.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        passCheck();
    }
});
btn.addEventListener("click", function(){
    if(inPass.classList.contains("dis-0")){
        emailCheck();
    }else{
        passCheck();
    }
})
function emailCheck(){
        let str = inMail.value;
        let iOfAt = -1;
        let iOfDot = -1;
        for(let i=0;i<str.length;i++){
            if(str[i] == "@"){
                iOfAt = i;
            }else if(str[i] == "."){
                iOfDot = i;
            }
        }
        if(iOfAt == -1 || iOfDot == -1 ||Math.abs(iOfAt-iOfDot)==1 || iOfDot == str.length-1){
            alert("Write in email format Ex:abc@def.ghi")
        }else{
            if(str != email){
                alert("Wrong Email")
            }else{
                inPass.classList.remove("dis-0")
            }
        }
}
function passCheck(){
    let str = inPass.value;
    if(str != password){
        alert("wrong password")
    }else{
        window.location.href = "index.html"
    }
}