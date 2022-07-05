function userValidation(inputValues,confirmPwdValue){
    const errors = {};
    errors.status= false;
    if (!inputValues.name) {
        errors.name = true;
        errors.status= true;
        errors.NameerrorShowMsg="This Field is Required"
    }
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
    if (!inputValues.mobileNo) {
        errors.mobileNo = true;
        errors.status= true;
        errors.MoberrorShowMsg="This Field is Required"
    }
    if (!inputValues.password) {
        errors.password =true;
        errors.status= true;
        errors.PwderrorShowMsg="This Field is Required"
    }
    if (!confirmPwdValue) {
        errors.Confirmpassword =true;
        errors.status= true;
        errors.ConfirmPwderrorShowMsg="This Field is Required"
    }
    if(inputValues.password && confirmPwdValue && inputValues.password !== confirmPwdValue){
        errors.Confirmpassword =true;
        errors.status= true;
        errors.ConfirmPwderrorShowMsg="Password is not the same"
    }
    return errors;
}

export default userValidation;