function pwdvalidation(inputValues){
    //currentPwd:"" ,newPwd:"",repeatPwd:""
    const errors = {};
    errors.status= false;
    if (!inputValues.currentPwd) {
        errors.currentPwd = true;
        errors.status= true;
        errors.currentPwderrorShowMsg="This Field is Required"
    }
    if (!inputValues.newPwd) {
        errors.newPwd =true;
        errors.status= true;
        errors.newPwderrorShowMsg="This Field is Required"
    }
    if (!inputValues.repeatPwd) {
        errors.repeatPwd =true;
        errors.status= true;
        errors.repeatPwderrorShowMsg="This Field is Required"
    }
    if(inputValues.newPwd && inputValues.repeatPwd && inputValues.newPwd !== inputValues.repeatPwd){
        errors.repeatPwd =true;
        errors.status= true;
        errors.repeatPwderrorShowMsg="Password is not the same"
    }
    return errors;
}

export default pwdvalidation;