const submitBtn = document.getElementById('submitBtn')
const userName = document.getElementById('name')
const errorMsg = document.getElementById('message')
const errorMsgphone = document.getElementById('messagephone')
const phoneNumber = document.getElementById('phone')
const webSite = document.getElementById('website')
const errorMsgWebSite = document.getElementById('messagewebsite')
const emailId = document.getElementById('email')
const errorMsgeEmail = document.getElementById('messageEmail')
const pinCode = document.getElementById('pin')
const errorMsgepin = document.getElementById('messagepin')
const form = document.getElementById('form')

submitBtn.addEventListener('click',()=>{
    nameValidation()
    phoneValidation ()
    webValidation()
    emailValidation ()
    pinValidation()
    
})


// User Name Validation
const nameValidation = ()=>{
    userNameValue = userName.value
    if (userNameValue===''){
        errorMsg.innerHTML='please enter valid user name'
    }
    else if(userNameValue.length < 3){
        
        errorMsg.innerHTML='please enter valid user name at list 3 charector'
    }
    else{
        errorMsg.innerHTML=''
    }
}

// Phone Number Validation
const phoneValidation = () =>{
    phoneNumberValue = phoneNumber.value
if(phoneNumberValue===''){
    errorMsgphone.innerHTML='please enter phone Number'
}
else if(phoneNumberValue.length < 10 || phoneNumberValue.length > 10){
        
    errorMsgphone.innerHTML='please enter valid number, must be 10 digit'
}
else{
    errorMsgphone.innerHTML=''
}
}

// WebSite Validation
const webValidation = () =>{
    webSiteValue = webSite.value
if(webSiteValue===''){
    errorMsgWebSite.innerHTML='please enter valid website name'
}
else if(webSiteValue.length < 5 ){
        
    errorMsgWebSite.innerHTML='please enter valid website name'
}
else{
    errorMsgWebSite.innerHTML=''
}
}

// email Id Validation
const emailValidation = () =>{
    emailIdValue = emailId.value
if(emailIdValue===''){
    errorMsgeEmail.innerHTML='please enter valid Email id'
}
else if(emailIdValue.length < 5 ){
        
    errorMsgeEmail.innerHTML='please enter valid Email id'
}
else{
    errorMsgeEmail.innerHTML=''
}
}

// Pin Validation
const pinValidation = () =>{
    pinCodeValue = pinCode.value
if(pinCodeValue===''){
    errorMsgepin.innerHTML='please enter valid Pin Code'
}
else if(pinCodeValue.length < 6 || pinCodeValue.length > 6){
        
    errorMsgepin.innerHTML='please enter valid number, must be 6 digit'
}

else{
    errorMsgepin.innerHTML=''
}
}
