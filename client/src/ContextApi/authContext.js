import { createContext, useEffect, useReducer } from "react";
// import axios from "axios";
import Reducer from "./Reducer";
const INITIAL_STATE ={
   currentUser: JSON.parse(localStorage.getItem("user")) || null,
   isFetching: false,
   error: false,
}
export const AuthContext= createContext(INITIAL_STATE)
export const AuthContextProvider = ({ children })=>{
   const [state, dispatch]=useReducer(Reducer, INITIAL_STATE)
   useEffect(() => {
      localStorage.setItem("user", JSON.stringify(state.currentUser));
    }, [state.currentUser]);
   //  const [currentUser,setCurrentUser]= useState(JSON.parse(localStorage.getItem("user") || null))

   //  const login = async (inputs)=>{
   //     const res = await axios.post("http://localhost:3002/api/login", inputs);
   //     setCurrentUser(res.data)
   //  };
   //  const logout = async (inputs)=>{
   //      await axios.post("http://localhost:3002/api/logout", inputs);
   //      setCurrentUser(null);
   //   }
   //   useEffect(()=>{
   //      localStorage.setItem("user", JSON.stringify(state.currentUser));
   //   }, [state.currentUser])
            return(
            <AuthContext.Provider value={{ currentUser: state.currentUser , isFetching: state.isFetching , error:state.error, dispatch }}> 
            {children}</AuthContext.Provider>);
}