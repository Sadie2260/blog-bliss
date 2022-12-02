import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
const Register=()=>{
    const [inputs, setInputs]=useState({
        username:"",
        email:"",
        password:"",

    })
    const navigate= useNavigate()
    const [ error , setError]=useState(null)
    const handleChange= e =>{
        setInputs(prev=>({...prev, [e.target.name]: e.target.value }))
    } 
    const handleSubmit = async e =>{
        e.preventDefault()
        try{
        await axios.post("http://localhost:3002/api/signup", inputs)
        navigate("/Login");
    }
        catch(err){
            setError(err.response.data)
        }
    }
//   const [username, setUsername]=useState([]);
//   const [email, setEmail]=useState([]);
//   const [password, setPassword]=useState([]);
//   
//   const handleSubmit = async (e)=>{
//     e.preventDefault();
//     setError(false);
//     try{
       
//         const res = await axios.post('http://localhost:3002/api/signup',{
//         username : username, 
//         email: email,
//         password : password,
//     });
//     res.data && window.location.replace("/")}
//     catch(err){
//         setError(true);
//     }
//   }
    return(
        <>
    <div className="container">
    <div className="form" onSubmit={handleSubmit}>
            <div className="form-container">
            <div className="form-left">
            <h2 className="heading"> Welcome to the blog bliss! </h2>
           <p className="form-desc">
            Fill the Registration form to join us
           </p>
           <form>
            <div className="input-wrap">
        
                <label htmlFor="name" className="input-label">Name:</label>
                    <input type="name" autoComplete="off" name="username" id="name" placeholder="Enter your Name" onChange={handleChange}/>
                
            </div>
            <div className="input-wrap">
                <label htmlFor="email" className="input-label"> Email:</label>
                    <input type="email" autoComplete="off" name="email" id="email" placeholder="Email" onChange={handleChange}/>
                
            </div>
            <div className="input-wrap">
                <label htmlFor="password" className="input-label">Password:</label>
                    <input type="password" autoComplete="off" name="password" id="password" placeholder="password" onChange={handleChange}/>
                
            </div>
            {/* <div className="input-wrap">
                <label htmlFor="comfirm password " className="input-label">Comfirm Password:</label>
                    <input type="comfirm password" autoComplete="off" name="comfirm password" id="comfirm password" placeholder="comfirm password"/>
                
            </div> */}
    <div className="form-buttons">
        <button type="submit" className="input-button">
    Register now
        </button>
    </div>
           </form>
           {error && <span style={{ color: "red" , marginTop: "10px" , textAlign: "center"}}> Something went wrong! </span>  }
           <p className="button-desc">
              Already have an account? <Link style={{ textDecoration:"none", fontWeight:"300" , color:"#f0932b"}}to={"/Login"}> login </Link>
           </p>
            </div>
            <div className="form-right">
                <img className="img" src="https://www.evolvedsearch.co.uk/wp-content/uploads/2020/06/corinne-kutz-tMI2_-r5Nfo-unsplash-500x500.jpg" alt="cover"/>
            </div>
            </div>
            </div>
            </div>
        </>
    )
    }
    export default Register