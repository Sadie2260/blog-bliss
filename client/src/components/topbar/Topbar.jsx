import "./topbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../ContextApi/authContext";
// import { NavData }from "./NavData";
const Topbar =()=>{
    const PF ="http://localhost:3002/images/"
    const { currentUser , logout, dispatch }=useContext(AuthContext);
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
      };
    const bg_color={
        backgroundColor:"black",
        fontFamily:"'IBM Plex Sans', sans-serif",
    }
    const items={
        textDecoration:"none",
        ...bg_color,
        color:"white",
        cursor:"pointer",
        letterSpacing:"1px",
        transition: "0.3s",
        "& :hover": {
       color:"red",
       transform:" scale(1.05)",
        }
    }
    const img={
        width: "50px",
    height: "50px",
    borderRadius: "50%",
    objectFit: "cover",
    cursor: "pointer",
    }
    return(
     <nav className="navbarWrappr">
        <div className="navbar-left">
            <p style={bg_color}>Blog</p>
        </div>
        <div style={bg_color} className="topbar-center">
        <ul style={bg_color} className="toplist">
        <li style={bg_color} className="toplistitem"><Link style={items}to={"/"} >Home</Link></li>
        <li style={bg_color} className="toplistitem"><Link style={items}to={"/Write"} >Write</Link></li>
        <li style={bg_color} className="toplistitem"><Link style={items}to={"/About"} >About</Link></li>
     { currentUser ? <li style={bg_color} className="toplistitem"><span style={items} onClick= { handleLogout} >Logout</span></li> : <li style={bg_color} className="toplistitem"><Link style={items}to={"/Login"} >Login</Link></li>}

        {/* {NavData.map((item,index)=>{
            return( 
                <li key={index}
                 style={bg_color} className="toplistitem"><Link style={items}to={item.link} >{item.icon}{item.title}</Link></li>
            )
        })} */}
            </ul>
        </div>
        <div style={bg_color} className="topbar-right">
        <input type="search" className="srch-bar" placeholder="Search"/>
        <FontAwesomeIcon style={bg_color}  className="srh" icon={faSearch}/>
        {currentUser? <Link to={"/Settings"}><img className="top-img" style={img} src={PF + currentUser.profilepic} alt="profile-pic"/></Link> : null}     
        </div>
                </nav>
         )
}
export default Topbar;