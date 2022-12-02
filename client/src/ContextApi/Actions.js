export const LoginStart= ((userCredentials)=>{
    type: "LOGIN_START"
});
export const LoginSucess =((currentUser)=>{
    type:"LOGIN_SUCCESSFUL"
});
export const LoginFailure=(()=>
{
    type: "LOGIN_FAILURE"
})
export const Logout = () => ({
  type: "LOGOUT",
});
export const UpdateStart = (userCredentials) => ({
    type: "UPDATE_START",
  });
  
  export const UpdateSuccess = (currentUser) => ({
    type: "UPDATE_SUCCESS",
  });
  
  export const UpdateFailure = () => ({
    type: "UPDATE_FAILURE",
  });