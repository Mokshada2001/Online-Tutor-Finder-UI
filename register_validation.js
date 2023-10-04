const form = document.querySelector("form");
// nField = form.querySelector(".name"),
// nInput = nField.querySelector("input"),
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");
cpField = form.querySelector(".password1"),
cpInput = cpField.querySelector("input"),

form.onsubmit = (e)=>{
  e.preventDefault();
  // (nInput.value == "") ? nField.classList.add("shake", "error") : checkUsername();
  (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
  (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();
  (cpInput.value == "") ? cpField.classList.add("shake", "error") : checkPass1();
  
  setTimeout(()=>{ 
    // nField.classList.remove("shake");
    eField.classList.remove("shake");
    pField.classList.remove("shake");
    cpField.classList.remove("shake");
  }, 500);
  
  // nInput.onkeyup = ()=>{checkUsername();}
  eInput.onkeyup = ()=>{checkEmail();} 
  pInput.onkeyup = ()=>{checkPass();}
  cpInput.onkeyup = ()=>{checkPass1();} 
  
  // function checkUsername(){ 
  //   if(nInput.value == ""){ 
  //     nField.classList.add("error");
  //     nField.classList.remove("valid");
  //   }
  //   else{ 
  //     nField.classList.remove("error");
  //     nField.classList.add("valid");
  //   }
  // }

  function checkEmail(){ 
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
    if(!eInput.value.match(pattern)){ 
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
      (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
    }
    else{ 
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }
  
  function checkPass(){
    if(pInput.value == ""){ 
      pField.classList.add("error");
      pField.classList.remove("valid");
    }
    else{ 
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }
  
  function checkPass1(){ 
    if(cpInput.value == ""){ 
      cpField.classList.add("error");
      cpField.classList.remove("valid");
    }
    else{ 
      cpField.classList.remove("error");
      cpField.classList.add("valid");
    }
  }
  
  if(!eField.classList.contains("error") && !pField.classList.contains("error") && !cpField.classList.contains("error")){
    window.location.href = form.getAttribute("action"); 
  }
}

// const form = document.getElementById('form');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const cnfpassword = document.getElementById('cnfpassword');

// form.addEventListener('submit', e => {
//   e.preventDefault();

//   checkInputs();
// });

// function checkInputs() {
//     // trim to remove the whitespaces
//     const usernameValue = username.value.trim();
//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();
//     const cnfpasswordValue = cnfpassword.value.trim();

//     if (usernameValue === '') {
//         setErrorFor(username, 'Username cannot be blank');
//     } else {
//         setSuccessFor(username);
//     }

//     if (emailValue === '') {
//         setErrorFor(email, 'Email cannot be blank');
//     } else if (!isEmail(emailValue)) {
//         setErrorFor(email, 'Not a valid email');
//     } else {
//         setSuccessFor(email);
//     }

//     if (passwordValue === '') {
//         setErrorFor(password, 'Password cannot be blank');
//     } else {
//         setSuccessFor(password);
//     }

//     if (cnfpasswordValue === '') {
//         setErrorFor(cnfpassword, 'Confirm Password cannot be blank');
//     } else if (passwordValue !== cnfpasswordValue) {
//         setErrorFor(cnfpassword, 'Passwords does not match');
//     } else {
//         setSuccessFor(cnfpassword);
//     }
//     }

//     function setErrorFor(input, message) {
//         const formControl = input.parentElement;
//         const small = formControl.querySelector('small');
//         formControl.className = 'form-control error';
//         small.innerText = message;
//     }

//     function setSuccessFor(input) {
//         const formControl = input.parentElement;
//         formControl.className = 'form-control success';
//     }

//     function isEmail(email) {
//     return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//         email
//     );
// }



