import { Link } from "react-router-dom";
import { AuthContext } from "../../ContextApi/authContext";
import {FaFacebookSquare, FaBlogger, FaInstagramSquare , FaTwitterSquare ,FaSnapchatSquare } from "react-icons/fa";
import "./footer.css";
import { useContext , useEffect , useState} from "react";
import axios from "axios";
const line={
  color:"#7f8c8d",
  height: "1px",
  border:"none",
  width: "100px",
  margin: "30px 2px",
  backgroundColor:"#7f8c8d"
}

const Footer = () => {
 const { currentUser } = useContext(AuthContext);
  const [tags, setTags]=useState([])
  useEffect (()=>{
    const getTags= async ()=>{
      const res = await axios.get("http://localhost:3002/api/categories");
      setTags(res.data);
    }
    getTags();
  },[])
  return (
    <section className='footer'> 
    <div className='footer-container'>
    <div className='links'>
    <h3> Quick Links</h3>
    <hr style={ line}/>
    <ul>
     <li> <Link to="/"> Home </Link> </li>
     <li> <Link to="/About"> About</Link> </li>
     { currentUser ? <li> <Link to="/Allpost"> My Blogs </Link> </li> :  <li> <Link to="/register"> Register </Link> </li> }
     { currentUser ?  <li> <Link to="/"> Logout</Link> </li> :  <li> <Link to="/Login"> Login</Link> </li> }
      </ul>
    </div>
    <div className="Tags-footer">
    <h3> Catagories </h3>
    <hr style={ line}/>
<ul>
{tags.map((T)=>{
  return( 
    <li style={{textDecoration: "none",
    margin: "5px 0px",
    color: "#8395a7",
    letterSpacing: "1px",
    fontSize: "1rem",
    fontFamily: "'Lora', serif",
    cursor:" pointer"}}>
    <Link to={`/?cat=${T.name}`} style={{ textDecoration:"none" , color:"inherit"}}>
{T.name}
  </Link></li>)})}
</ul>
    </div>
    <div className="soicals">
    <h3> Contact Us</h3>
    <hr style={ line}/>
    <ul>
      <li> <FaFacebookSquare/> Facebook</li>
      <li> <FaInstagramSquare/> instagram </li>
      <li> <FaTwitterSquare/> Twitter</li>
      <li> <FaSnapchatSquare/> Snapchat</li>
    
    </ul>
    </div>
    <div className="blog-info">
   <span> < FaBlogger className="ic"/>
      <h4> blog bliss </h4></span>
      <hr style={ line}/>
      <ul>
     <li> { currentUser ? <p>  Thanks for joining our site! </p> : <p>join our site to start ur writing journay </p> }</li> 
      <li> { currentUser ? (<Link to="/Write"><button> Start Writing Now </button> </Link>):(<Link to="/register"><button> Register Now! </button> </Link>) }</li>
      </ul>
    </div>
    </div>  
   </section>
  )
}

export default Footer
