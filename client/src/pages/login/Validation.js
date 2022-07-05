function validation(inputValues){
    const errors = {};
    errors.status= false;
    if (!inputValues.email) {
        errors.email = true;
        errors.status= true;
        errors.EmailerrorShowMsg="This Field is Required"
    }else{
        errors.EmailerrorShowMsg = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(inputValues.email)
        ? ""
        : "Email is not valid.";
        if(errors.EmailerrorShowMsg) {
            errors.email = true;
            errors.status= true; 
        }
    }
    if (!inputValues.password) {
        errors.password =true;
        errors.status= true;
        errors.PwderrorShowMsg="This Field is Required"
    }
    return errors;
}

export default validation;