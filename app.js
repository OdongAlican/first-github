// form blur event listeners

document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);


function validateName(){
    const name = document.getElementById('name');
    const rename = /^[a-zA-Z]{2,10}/;

    if(!rename.test(name.value)){
        return name.classList.add('is-invalid');
    }else{
        return name.classList.remove('is-invalid');
    }

}

function validateZip(){
    const zip = document.getElementById('zip');
    const rezip = /^[0-9]{5}(-[0-9]{4})?$/;
    if(!rezip.test(zip.value)){
        return zip.classList.add('is-invalid');
    }else{
        return zip.classList.remove('is-invalid');
    }
    
}

function validateEmail(){
    const email = document.getElementById('email');
    const reemail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!reemail.test(email.value)){
        email.classList.add('is-invalid');
    }else{
        email.classList.remove('is-invalid');
    }
    
}

function validatePhone(){
    const phone = document.getElementById('phone');
    const rephone = /^\+?\d{3,4}[-. ]?\d{3}[-. ]?\d{3}[-. ]?(\d{3})?$/;

    if(!rephone.test(phone.value)){
        phone.classList.add('is-invalid');
    }else{
        phone.classList.remove('is-invalid');
    }
}
