export const checkValidData=(email,password,name)=>{
    const isEmailValid=/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email);
    const isPasswordValid=/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
    const isNameValid=/^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$/.test(name);

    if(!isEmailValid) return "Email Id is not valid";
    if(!isPasswordValid) return "Password is not valid";
    if(!isNameValid) return "Please Enter Valid Full Name";
    return null;
}