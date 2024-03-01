const form = document.querySelector("form");
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");
cpField = form.querySelector(".password1"),
cpInput = cpField.querySelector("input"),

form.onsubmit = (e)=>{
  e.preventDefault();
  (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
  (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();
  (cpInput.value == "") ? cpField.classList.add("shake", "error") : checkPass1();
  
  setTimeout(()=>{ 
    eField.classList.remove("shake");
    pField.classList.remove("shake");
    cpField.classList.remove("shake");
  }, 500);
  
  eInput.onkeyup = ()=>{checkEmail();} 
  pInput.onkeyup = ()=>{checkPass();}
  cpInput.onkeyup = ()=>{checkPass1();} 
  
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

