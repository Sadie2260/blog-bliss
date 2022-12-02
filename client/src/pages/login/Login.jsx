import "./login.css";
import { Link , useNavigate} from "react-router-dom";
import { useContext, useState , useRef} from "react";
import { AuthContext } from "../../ContextApi/authContext";
import axios from "axios";
const Login=()=>{
    const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:3002/api/login", {
        email: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
    // const [inputs, setInputs]=useState({
    //     email:"",
    //     password:"",

    // })
    // const navigate= useNavigate()
    // const [ error , setError]=useState(null)
    // const { login, isFetching, dispatch }= useContext(AuthContext);
    // const handleChange= e =>{
    //     setInputs(prev=>({...prev, [e.target.name]: e.target.value }))
    // } 
    // const handleSubmit = async e =>{
    //     e.preventDefault()
    //     dispatch({type:"LOGIN_START"})
    //     try{
    //     await login(inputs)
    //     navigate("/");
    //     dispatch({type: "LOGIN_SUCCESSFUL"})
    // }
    //     catch(err){
    //         setError(err.response.data)
    //         dispatch({type:"LOGIN_FAILURE"})
    //     }
    // }
    return(
        <>
    <div className="container">
        <form className="form" onSubmit={handleSubmit}>
       
            <div className="form-container">
            <div className="form-left">
                <h2 className="hading">
                    Login 
                </h2>
                <p  className="form-desc">
                    Enter your email and password to login!
                </p>
                <div className="input-wrap">
                    <label htmlFor="email" className="input-label"></label>
                        <input type="text" autoComplete="off" name="email" id="email" placeholder="YOUR EMAIL" ref={userRef}></input>
                </div>
                <div className="input-wrap">
                    <label htmlFor="password" className="input-label"></label>
                        <input type="password" autoComplete="off" name="password" id="password" placeholder="YOUR PASSWORD" ref={passwordRef}></input>
                
                </div>
                <div className="btn-wrap">
                      <button disabled={isFetching} className="btn" type="submit">login</button>
                      {/* { error ? <span> Something went wrong </span> : null} */}
                       <span className="btn-d"> dont have an account? <Link style={{ textDecoration:"none", fontWeight:"300" , color:"#f0932b"}}to={"/register"}> sign up</Link></span>
                </div> 
                </div>
                <div className="form-right">
                    <img className="img" src="https://www.evolvedsearch.co.uk/wp-content/uploads/2020/06/corinne-kutz-tMI2_-r5Nfo-unsplash-500x500.jpg" alt="img"></img>
                </div>
            </div>
        </form>
    </div>
  
    </>
    )}
export default Login;