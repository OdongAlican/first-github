
const user_first_name = document.getElementById('user_first_name').addEventListener('blur',user_first_name);
const user_last_name = document.getElementById('user_last_name').addEventListener('blur',user_last_name);
const user_email = document.getElementById('user_email').addEventListener('blur',user_email);
const user_address = document.getElementById('user_address').addEventListener('blur',user_address);
const user_phone = document.getElementById('user_phone').addEventListener('blur',user_phone);
const user_name = document.getElementById('user_name').addEventListener('blur',user_name);
const user_password = document.getElementById('user_password').addEventListener('blur',user_password);
const user_confirm_password = document.getElementById('user_confirm_password').addEventListener('blur',user_confirm_password);
const work_order_type = document.getElementById('work_order_type').addEventListener('blur',work_order_type);
const ticket_site_id = document.getElementById('ticket_site_id').addEventListener('blur',ticket_site_id);
const ticket_po_number = document.getElementById('ticket_po_number').addEventListener('blur',ticket_po_number);
const hours_to_add = document.getElementById('hours_to_add').addEventListener('blur',hours_to_add);
const engineer_first_name = document.getElementById('engineer_first_name').addEventListener('blur',engineer_first_name);
const engineer_last_name = document.getElementById('engineer_last_name').addEventListener('blur',engineer_last_name);
const engineer_email = document.getElementById('engineer_email').addEventListener('blur',engineer_email);
const engineer_address = document.getElementById('engineer_address').addEventListener('blur',engineer_address);
const engineer_phone = document.getElementById('engineer_phone').addEventListener('blur',engineer_phone);
const customer_name = document.getElementById('customer_name').addEventListener('blur',customer_name);
const customer_product = document.getElementById('customer_product').addEventListener('blur',customer_product);
const customer_address = document.getElementById('customer_address').addEventListener('blur',customer_address);
const customer_phone = document.getElementById('customer_phone').addEventListener('blur',customer_phone);
const customer_email = document.getElementById('customer_email').addEventListener('blur',customer_email);
const work_order_type_edit = document.getElementById('work_order_type_edit').addEventListener('blur',work_order_type_edit);
const user_first_name_edit = document.getElementById('user_first_name_edit').addEventListener('blur',user_first_name_edit);
const user_last_name_edit = document.getElementById('user_last_name_edit').addEventListener('blur',user_last_name_edit);
const user_email_edit = document.getElementById('user_email_edit').addEventListener('blur',user_email_edit);
const user_address_edit = document.getElementById('user_address_edit').addEventListener('blur',user_address_edit);
const user_phone_edit = document.getElementById('user_phone_edit').addEventListener('blur',user_phone_edit);
const user_name_edit = document.getElementById('user_name_edit').addEventListener('blur',user_name_edit);
const user_password_edit = document.getElementById('user_password_edit').addEventListener('blur',user_password_edit);
const user_confirm_password_edit = document.getElementById('user_confirm_password_edit').addEventListener('blur',user_confirm_password_edit);
const hours_to_add_edit = document.getElementById('hours_to_add_edit').addEventListener('blur',hours_to_add_edit);
const engineer_first_name_edit = document.getElementById('engineer_first_name_edit').addEventListener('blur',engineer_first_name_edit);
const engineer_last_name_edit = document.getElementById('engineer_last_name_edit').addEventListener('blur',engineer_last_name_edit);
const engineer_email_edit = document.getElementById('engineer_email_edit').addEventListener('blur',engineer_email_edit);
const engineer_address_edit = document.getElementById('engineer_address_edit').addEventListener('blur',engineer_address_edit);
const engineer_phone_edit = document.getElementById('engineer_phone_edit').addEventListener('blur',engineer_phone_edit);
const customer_name_edit = document.getElementById('customer_name_edit').addEventListener('blur',customer_name_edit);
const customer_product_edit = document.getElementById('customer_product_edit').addEventListener('blur',customer_product_edit);
const customer_address_edit = document.getElementById('customer_address_edit').addEventListener('blur',customer_address_edit);
const customer_phone_edit = document.getElementById('customer_phone_edit').addEventListener('blur',customer_phone_edit);
const customer_email_edit = document.getElementById('customer_email_edit').addEventListener('blur',customer_email_edit);


function user_first_name(){
    const user_first_name = document.getElementById('user_first_name');
    const re_user_first_name = /^[a-zA-Z\.]?[-. ]?[a-zA-Z]{2,16}$/;

    if(!re_user_first_name.test(user_first_name.value)){
        return user_first_name.classList.add('is-invalid');
    }else{
        return user_first_name.classList.remove('is-invalid');
    }

}

function user_last_name(){
    const user_last_name = document.getElementById('user_last_name');
    const re_user_last_name = /^[a-zA-Z\.]?[-. ]?[a-zA-Z]{2,16}$/;

    if(!re_user_last_name.test(user_last_name.value)){
        return user_last_name.classList.add('is-invalid');
    }else{
        return user_last_name.classList.remove('is-invalid');
    }

}

function user_email(){
    const user_email = document.getElementById('user_email');
    const re_user_email = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!re_user_email.test(user_email.value)){
        user_email.classList.add('is-invalid');
    }else{
        user_email.classList.remove('is-invalid');
    }
    
}

function user_address(){
    const user_address = document.getElementById('user_address');
    const re_user_address = /^[a-zA-Z0-9_\-\.]{2,15}[-. ]?(\d{1,9})?[-. ]?([a-zA-Z0-9_\-\.]{2,15})?[-. ]?[a-zA-Z0-9_\-\.]){2,15}]?$/;

    if(!re_user_address.test(user_address.value)){
        user_address.classList.add('is-invalid');
    }else{
        user_address.remove('is-invalid');
    }
}

function user_phone(){
    const user_phone = document.getElementById('user_phone');
    const re_user_phone = /^\+?\d{3,4}[-. ]?\d{3}[-. ]?\d{3}[-. ]?(\d{3})?$/;

    if(!re_user_phone.test(user_phone.value)){
        user_phone.classList.add('is-invalid');
    }else{
        user_phone.classList.remove('is-invalid');
    }
}

function user_name(){
    const user_name = document.getElementById('user_name');
    const re_user_name = /^[a-zA-Z\.\@]?[-. ]?[a-zA-Z]{2,16}$/;

    if(!re_user_name.test(user_name.value)){
        return user_name.classList.add('is-invalid');
    }else{
        return user_name.classList.remove('is-invalid');
    }

}

function user_password(){
    const user_password = document.getElementById('user_password');
    const re_user_password = /^[a-zA-Z0-9]{2,16}(\+\.\@\-)?$/;

    if(!re_user_password.test(user_password.value)){
        return user_password.classList.add('is-invalid');
    }else{
        return user_password.classList.remove('is-invalid');
    }

}

function user_confirm_password(){
    const user_confirm_password = document.getElementById('user_confirm_password');
    const re_user_confirm_password = /^[a-zA-Z0-9]{2,16}(\+\.\@\-)?$/;

    if(!re_user_confirm_password.test(user_confirm_password.value)){
        return user_confirm_password.classList.add('is-invalid');
    }else{
        return user_confirm_password.classList.remove('is-invalid');
    }

}

function work_order_type(){
    const work_order_type = document.getElementById('work_order_type');
    const re_work_order_type = /^[a-zA-Z0-9]{2,16}(\+\.\@\-)?$/;

    if(!re_work_order_type.test(work_order_type.value)){
        return work_order_type.classList.add('is-invalid');
    }else{
        return work_order_type.classList.remove('is-invalid');
    }

}

function ticket_site_id(){
    const ticket_site_id = document.getElementById('ticket_site_id');
    const re_ticket_site_id = /^[a-zA-Z0-9_\-\.]{2,16}$/;

    if(!re_ticket_site_id.test(ticket_site_id.value)){
        return ticket_site_id.classList.add('is-invalid');
    }else{
        return ticket_site_id.classList.remove('is-invalid');
    }

}

function ticket_po_number(){
    const ticket_po_number = document.getElementById('ticket_po_number');
    const re_ticket_po_number = /^[a-zA-Z0-9_\-\.]{2,16}$/;

    if(!re_ticket_po_number.test(ticket_po_number.value)){
        return ticket_po_number.classList.add('is-invalid');
    }else{
        return ticket_po_number.classList.remove('is-invalid');
    }

}

function hours_to_add(){
    const hours_to_add = document.getElementById('hours_to_add');
    const re_hours_to_add = /^[0-9]{2,16}$/;

    if(!re_hours_to_add.test(hours_to_add.value)){
        return hours_to_add.classList.add('is-invalid');
    }else{
        return hours_to_add.classList.remove('is-invalid');
    }

}

function engineer_first_name(){
    const engineer_first_name = document.getElementById('engineer_first_name');
    const re_engineer_first_name = /^[a-zA-Z\.]?[-. ]?[a-zA-Z]{2,16}$/;

    if(!re_engineer_first_name.test(engineer_first_name.value)){
        return engineer_first_name.classList.add('is-invalid');
    }else{
        return engineer_first_name.classList.remove('is-invalid');
    }

}

function engineer_last_name(){
    const engineer_last_name = document.getElementById('engineer_last_name');
    const re_engineer_last_name = /^[a-zA-Z\.]?[-. ]?[a-zA-Z]{2,16}$/;;

    if(!re_user_last_name.test(user_last_name.value)){
        return user_last_name.classList.add('is-invalid');
    }else{
        return user_last_name.classList.remove('is-invalid');
    }

}

function engineer_email(){
    const engineer_email = document.getElementById('engineer_email');
    const re_engineer_email = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!re_engineer_email.test(engineer_email.value)){
        engineer_email.classList.add('is-invalid');
    }else{
        engineer_email.classList.remove('is-invalid');
    }
    
}

function engineer_address(){
    const engineer_address = document.getElementById('engineer_address');
    const re_engineer_address = /^[a-zA-Z0-9_\-\.]{2,15}[-. ]?(\d{1,9})?[-. ]?([a-zA-Z0-9_\-\.]{2,15})?[-. ]?[a-zA-Z0-9_\-\.]){2,15}]?$/;

    if(!re_engineer_address.test(engineer_address.value)){
        engineer_address.classList.add('is-invalid');
    }else{
        engineer_address.remove('is-invalid');
    }
}

function engineer_phone(){
    const engineer_phone = document.getElementById('engineer_phone');
    const re_engineer_phone = /^\+?\d{3,4}[-. ]?\d{3}[-. ]?\d{3}[-. ]?(\d{3})?$/;

    if(!re_engineer_phone.test(engineer_phone.value)){
        engineer_phone.classList.add('is-invalid');
    }else{
        engineer_phone.classList.remove('is-invalid');
    }
}

function customer_name(){
    const customer_name = document.getElementById('customer_name');
    const re_customer_name = /^[a-zA-Z\.]?[-. ]?[a-zA-Z]{2,16}$/;

    if(!re_customer_name.test(customer_name.value)){
        return customer_name.classList.add('is-invalid');
    }else{
        return customer_name.classList.remove('is-invalid');
    }

}

function customer_product(){
    const customer_product = document.getElementById('customer_product');
    const re_customer_product = /^[a-zA-Z0-9_\-\.]{2,16}$/;

    if(!re_customer_product.test(customer_product.value)){
        return customer_product.classList.add('is-invalid');
    }else{
        return customer_product.classList.remove('is-invalid');
    }

}

function customer_address(){
    const customer_address = document.getElementById('customer_address');
    const re_customer_address = /^[a-zA-Z0-9_\-\.]{2,15}[-. ]?(\d{1,9})?[-. ]?([a-zA-Z0-9_\-\.]{2,15})?[-. ]?[a-zA-Z0-9_\-\.]){2,15}]?$/;

    if(!re_customer_address.test(customer_address.value)){
        customer_address.classList.add('is-invalid');
    }else{
        customer_address.remove('is-invalid');
    }
}

function customer_phone(){
    const customer_phone = document.getElementById('customer_phone');
    const re_customer_phone = /^\+?\d{3,4}[-. ]?\d{3}[-. ]?\d{3}[-. ]?(\d{3})?$/;

    if(!re_customer_phone.test(customer_phone.value)){
        customer_phone.classList.add('is-invalid');
    }else{
        customer_phone.classList.remove('is-invalid');
    }
}

function customer_email(){
    const customer_email = document.getElementById('customer_email');
    const re_customer_email = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!re_customer_email.test(customer_email.value)){
        customer_email.classList.add('is-invalid');
    }else{
        customer_email.classList.remove('is-invalid');
    }
    
}

function work_order_type_edit(){
    const work_order_type_edit = document.getElementById('work_order_type_edit');
    const re_work_order_type_edit = /^[a-zA-Z0-9]{2,16}(\+\.\@\-)?$/;

    if(!re_work_order_type_edit.test(work_order_type_edit.value)){
        return work_order_type_edit.classList.add('is-invalid');
    }else{
        return work_order_type_edit.classList.remove('is-invalid');
    }

}

function user_first_name_edit(){
    const user_first_name_edit = document.getElementById('user_first_name_edit');
    const re_user_first_name_edit = /^[a-zA-Z\.]?[-. ]?[a-zA-Z]{2,16}$/;

    if(!re_user_first_name_edit.test(user_first_name_edit.value)){
        return user_first_name_edit.classList.add('is-invalid');
    }else{
        return user_first_name_edit.classList.remove('is-invalid');
    }

}

function user_last_name_edit(){
    const user_last_name_edit = document.getElementById('user_last_name_edit');
    const re_user_last_name_edit = /^[a-zA-Z\.]?[-. ]?[a-zA-Z]{2,16}$/;

    if(!re_user_last_name_edit.test(user_last_name_edit.value)){
        return user_last_name_edit.classList.add('is-invalid');
    }else{
        return user_last_name_edit.classList.remove('is-invalid');
    }

}

function user_email_edit(){
    const user_email_edit = document.getElementById('user_email_edit');
    const re_user_email_edit = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!re_user_email_edit.test(user_email_edit.value)){
        user_email_edit.classList.add('is-invalid');
    }else{
        user_email_edit.classList.remove('is-invalid');
    }
    
}

function user_address_edit(){
    const user_address_edit = document.getElementById('user_address_edit');
    const re_user_address_edit = /^[a-zA-Z0-9_\-\.]{2,15}[-. ]?(\d{1,9})?[-. ]?([a-zA-Z0-9_\-\.]{2,15})?[-. ]?[a-zA-Z0-9_\-\.]){2,15}]?$/;

    if(!re_user_address_edit.test(user_address_edit.value)){
        user_address_edit.classList.add('is-invalid');
    }else{
        user_address_edit.remove('is-invalid');
    }
}

function user_phone_edit(){
    const user_phone_edit = document.getElementById('user_phone_edit');
    const re_user_phone_edit = /^\+?\d{3,4}[-. ]?\d{3}[-. ]?\d{3}[-. ]?(\d{3})?$/;

    if(!re_user_phone_edit.test(user_phone_edit.value)){
        user_phone_edit.classList.add('is-invalid');
    }else{
        user_phone_edit.classList.remove('is-invalid');
    }
}

function user_name_edit(){
    const user_name_edit = document.getElementById('user_name_edit');
    const re_user_name_edit = /^[a-zA-Z\.\@]?[-. ]?[a-zA-Z]{2,16}$/;

    if(!re_user_name_edit.test(user_name_edit.value)){
        return user_name_edit.classList.add('is-invalid');
    }else{
        return user_name_edit.classList.remove('is-invalid');
    }

}

function user_password_edit(){
    const user_password_edit = document.getElementById('user_password_edit');
    const re_user_password_edit = /^[a-zA-Z0-9]{2,16}(\+\.\@\-)?$/;

    if(!re_user_password_edit.test(user_password_edit.value)){
        return user_password_edit.classList.add('is-invalid');
    }else{
        return user_password_edit.classList.remove('is-invalid');
    }

}

function user_confirm_password_edit(){
    const user_confirm_password_edit = document.getElementById('user_confirm_password_edit');
    const re_user_confirm_password_edit = /^[a-zA-Z0-9]{2,16}(\+\.\@\-)?$/;

    if(!re_user_confirm_password_edit.test(user_confirm_password_edit.value)){
        return user_confirm_password_edit.classList.add('is-invalid');
    }else{
        return user_confirm_password_edit.classList.remove('is-invalid');
    }

}

function hours_to_add_edit(){
    const hours_to_add_edit = document.getElementById('hours_to_add_edit');
    const re_hours_to_add_edit = /^[0-9]{2,16}$/;

    if(!re_hours_to_add_edit.test(hours_to_add_edit.value)){
        return hours_to_add_edit.classList.add('is-invalid');
    }else{
        return hours_to_add_edit.classList.remove('is-invalid');
    }

}

function engineer_first_name_edit(){
    const engineer_first_name_edit = document.getElementById('engineer_first_name_edit');
    const re_engineer_first_name_edit = /^[a-zA-Z\.]?[-. ]?[a-zA-Z]{2,16}$/;

    if(!re_engineer_first_name_edit.test(engineer_first_name_edit.value)){
        return engineer_first_name_edit.classList.add('is-invalid');
    }else{
        return engineer_first_name_edit.classList.remove('is-invalid');
    }

}

function engineer_last_name_edit(){
    const engineer_last_name_edit = document.getElementById('engineer_last_name_edit');
    const re_engineer_last_name_edit = /^[a-zA-Z\.]?[-. ]?[a-zA-Z]{2,16}$/;;

    if(!re_engineer_last_name_edit.test(engineer_last_name_edit.value)){
        return engineer_last_name_edit.classList.add('is-invalid');
    }else{
        return engineer_last_name_edit.classList.remove('is-invalid');
    }

}

function engineer_email_edit(){
    const engineer_email_edit = document.getElementById('engineer_email_edit');
    const re_engineer_email_edit = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!re_engineer_email_edit.test(engineer_email_edit.value)){
        engineer_email_edit.classList.add('is-invalid');
    }else{
        engineer_email_edit.classList.remove('is-invalid');
    }
    
}

function engineer_address_edit(){
    const engineer_address_edit = document.getElementById('engineer_address_edit');
    const re_engineer_address_edit = /^[a-zA-Z0-9_\-\.]{2,15}[-. ]?(\d{1,9})?[-. ]?([a-zA-Z0-9_\-\.]{2,15})?[-. ]?[a-zA-Z0-9_\-\.]){2,15}]?$/;

    if(!re_engineer_address_edit.test(engineer_address_edit.value)){
        engineer_address_edit.classList.add('is-invalid');
    }else{
        engineer_address_edit.remove('is-invalid');
    }
}

function engineer_phone_edit(){
    const engineer_phone_edit = document.getElementById('engineer_phone_edit');
    const re_engineer_phone_edit = /^\+?\d{3,4}[-. ]?\d{3}[-. ]?\d{3}[-. ]?(\d{3})?$/;

    if(!re_engineer_phone_edit.test(engineer_phone_edit.value)){
        engineer_phone_edit.classList.add('is-invalid');
    }else{
        engineer_phone_edit.classList.remove('is-invalid');
    }
}

function customer_name_edit(){
    const customer_name_edit = document.getElementById('customer_name_edit');
    const re_customer_name_edit = /^[a-zA-Z\.]?[-. ]?[a-zA-Z]{2,16}$/;

    if(!re_customer_name_edit.test(customer_name_edit.value)){
        return customer_name_edit.classList.add('is-invalid');
    }else{
        return customer_name_edit.classList.remove('is-invalid');
    }

}

function customer_product_edit(){
    const customer_product_edit = document.getElementById('customer_product_edit');
    const re_customer_product_edit = /^[a-zA-Z0-9_\-\.]{2,16}$/;

    if(!re_customer_product_edit.test(customer_product_edit.value)){
        return customer_product_edit.classList.add('is-invalid');
    }else{
        return customer_product_edit.classList.remove('is-invalid');
    }

}

function customer_address_edit(){
    const customer_address_edit = document.getElementById('customer_address_edit');
    const re_customer_address_edit = /^[a-zA-Z0-9_\-\.]{2,15}[-. ]?(\d{1,9})?[-. ]?([a-zA-Z0-9_\-\.]{2,15})?[-. ]?[a-zA-Z0-9_\-\.]){2,15}]?$/;

    if(!re_customer_address_edit.test(customer_address_edit.value)){
        customer_address_edit.classList.add('is-invalid');
    }else{
        customer_address_edit.remove('is-invalid');
    }
}

function customer_phone_edit(){
    const customer_phone_edit = document.getElementById('customer_phone_edit');
    const re_customer_phone_edit = /^\+?\d{3,4}[-. ]?\d{3}[-. ]?\d{3}[-. ]?(\d{3})?$/;

    if(!re_customer_phone_edit.test(customer_phone_edit.value)){
        customer_phone_edit.classList.add('is-invalid');
    }else{
        customer_phone_edit.classList.remove('is-invalid');
    }
}

function customer_email(){
    const customer_email_edit = document.getElementById('customer_email_edit');
    const re_customer_email_edit = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!re_customer_email_edit.test(customer_email_edit.value)){
        customer_email_edit.classList.add('is-invalid');
    }else{
        customer_email_edit.classList.remove('is-invalid');
    }
    
}



