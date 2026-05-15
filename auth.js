let loginMode=true;

document.body.insertAdjacentHTML("afterbegin",`

<div id="authScreen" class="auth">

<h2 id="authTitle">Login</h2>

<input id="user" placeholder="Username">
<input id="pass" type="password" placeholder="Password">

<button onclick="handleAuth()">Login</button>
<p onclick="switchAuth()">Create account</p>

</div>

`);

function switchAuth(){
loginMode=!loginMode;
authTitle.innerText=loginMode?"Login":"Sign Up";
}

function handleAuth(){

const u=user.value;
const p=pass.value;

if(loginMode){

if(localStorage.user===u && localStorage.pass===p){
localStorage.session=1;
startApp();
}else{
alert("Wrong login");
}

}else{

localStorage.user=u;
localStorage.pass=p;
localStorage.session=1;
startApp();
}

}

function startApp(){
authScreen.style.display="none";
}

window.onload=()=>{
if(localStorage.session) startApp();
}

function logout(){
localStorage.removeItem("session");
location.reload();
}
