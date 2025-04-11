function Validation(values){
    let errors = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
        if(values.email===''){
        errors.email = "It should not be empty";
    }
    else if(!email_pattern.test(values.email)){
        errors.email = "Email is invalid";
    }

    else{ errors.email=''}

    if(!values.password){
        errors.password = "Password is required";
    }else if(values.password.length < 6){
        errors.password = "XXXXXXXX must be at least 6 characters";
    }
    if(!values.confirmPassword){
        errors.confirmPassword = "XXXXXXX password is required";
    }
    
    else if(!password_pattern.test(values.password)){
        errors.confirmPassword = "XXXXXXXXX didn't match";
    } else{ 
        errors.confirmPassword=''}
    return errors;

} export default Validation;