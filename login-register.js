const login_here = document.getElementById('login_here');
const first_name = document.getElementById("first-name");
const last_name = document.getElementById("last-name");
const username = document.getElementById("username");
const password = document.getElementById("password");
const submit_btn = document.getElementById("submit_btn");


login_here.addEventListener('click', function(){

    if(login_here.innerHTML === "Login"){
        first_name.style.display = 'none';
        last_name.style.display = 'none';
        submit_btn.value = "Login";
        login_here.innerHTML = "Register";
    }
    else{
        first_name.style.display = 'inline';
        last_name.style.display = 'inline';
        submit_btn.value = "Register";
        login_here.innerHTML = "Login";
    }

});
