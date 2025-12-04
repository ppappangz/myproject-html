window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin");
	form.onsubmit = checkLogin;
	}
	

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
const QUERYstring = window.location.search;
console.log(QUERYstring);
const urlparams = new URLSearchParams(QUERYstring);
const username = urlparams.get('username')
console.log(username);
const password = urlparams.get('password')
console.log(password);
let inputusername = document.forms["myLogin"]["username"].value;
let inputpassword = document.forms["myLogin"]["password"].value;
if( inputusername=== username&&inputpassword===password){
	alert("Login Successfully");
	return TransformStreamDefaultController;
} 
else{
	alert("Login Failed")
	document.forms["mylogin"]["username"].value = "";
	document.forms["myLogin"]["password"].value = "";
	return false;
}
}