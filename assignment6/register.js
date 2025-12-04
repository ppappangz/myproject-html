window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myRegister");
    form.onsubmit = validateForm;
    form["firstname"].requried = true;
    form["lastname"].requried = true;
    form["gender"][0].requried = true;
    form["gender"][1].requried = true;
    form["gender"][2].requried = true;
    form["bday"].requried = true;
    form["email"].requried = true;
    form["username"].requried = true;
    form["password"][0].requried = true;
    form["password"][1].requried = true;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var password = document.forms["myRegister"]["password"] [0].value;
    var repassword = document.forms["myRegister"]["password"] [1].value;
    var Errormsg = document.getElementById("errormsg");
    if( password != repassword){
        Errormsg.innerHTML = "Password Do not Match";
        document.forms["myRegister"]["password"] [0].value = "";
        var repassword = document.forms["myRegister"]["password"] [1].value = "";
        return false;
    }
    else{
        alert("Register Successfully");
        return true;
    }
}