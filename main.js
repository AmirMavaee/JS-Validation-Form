const signInBtn = document.querySelector(".signin-button");
const signInStatus = document.querySelector(".signin-status");
const passInput = document.querySelector(".pass-input");
const passwordMsg = document.querySelector(".password-msg");
const emailInput = document.querySelector(".email-input");
const emailMsg = document.querySelector(".email-msg");

signInBtn.addEventListener("click",function(){
    let ifValidData = true;
    if(emailInput.value !== "" && emailInput.value.includes("@") && emailInput.value.includes(".")){
        emailMsg.innerHTML ="";
    }
    else{
        emailMsg.innerHTML ="Please enter a valid Email";
        ifValidData = false;
    }

    if(passInput.value.length === 0){
        passwordMsg.innerHTML ="Please enter your password";
        ifValidData = false;
        
    }
    else if(passInput.value.length <= 8){
        passwordMsg.innerHTML = "Your password is too short";
        ifValidData = false;
    }
    else{
        passwordMsg.innerHTML = "";
    }

    if(ifValidData){
        signIn()
    }
})


function signIn(){
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                email: emailInput.value,
                passWord: passInput.value,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
    })
      .then((response) => response.json())
      .then((json) => {
        signInStatus.innerHTML = "You signed in successfully";
        passInput.value = "";
        emailInput.value = "";
      });

}
