import "./veiwpost.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import img from "../header/imgs/1.jpeg";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../ContextApi/authContext";
import { useContext ,useState, useEffect } from "react";
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import DOMPurify from "dompurify";
import axios from "axios";
const style={
  size:"3rem",
  color: "white",
  width:"40px",
  height:"40px"
}
const icon={
  width:"20px",
  height: "25px",
  cursor: "pointer"
}
const edit={
  color: "green",
  ...icon
}
const del={
  color: "red",
  marginLeft: "8px",
  ...icon
}
const VeiwPost = () => {
  const PF = "http://localhost:3002/images/";
  const { currentUser } = useContext(AuthContext);
  const location= useLocation();
  const [updateMode, setUpdateMode] = useState(false);
  const path = location.pathname.split("/")[2];
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [ post,setPost] =useState({})
  useEffect(()=> {
    const getPost = async ()=>{
      const res = await axios.get(`http://localhost:3002/api/post/` + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    }
    getPost()
  },[path])
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3002/api/post/${post._id}`, {
        data: { username: currentUser.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };
  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:3002/api/post/${post._id}`, {
        username: currentUser.username,
        title,
        desc,
      });
      setUpdateMode(false)
    } catch (err) {}
  };
  return (
    <div className= "post-conatiner">
    <div className="Title-wrapper">
    {updateMode ? (
          <input
          style={{width: "60%",
                  backgroundColor: "transparent" ,
                  color: "black",
                  height: "50px"}}
            type="text"
            value={title}
            placeholder={post.title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) :(
   <h1 className="title"> { setUpdateMode ? title : post.title } </h1>)} 
   <span className="time">{new Date(post.createdAt).toDateString()}</span>
    </div>
    <div className="Spost-container">
    <div className="img-container">
    {post.photo &&
        <img className="Cover" src={ PF + post.photo} alt="img-cover"/>}
    </div>
    <div className="detail-wrapper">
    
  
    <div className="content-wrapper">
    {updateMode ? (
      <ReactQuill theme="snow" className="body" value={desc}   placeholder={post.desc} onChange={(e) => setDesc(e.target.value)}/>
        ) : (
        <p className="content"  dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}>
        </p>)}
    </div>
    <div className="posts-options">
    <span className="Post-tags"> Post tags: <small>{post.categories} </small></span>
  
   { currentUser.username=== post.username ? (<span className="Post-icons">
   <FontAwesomeIcon style={edit}icon={faEdit} onClick={() => setUpdateMode(true)}/>
     <FontAwesomeIcon style={del} icon={faTrashCan} onClick={handleDelete}/> </span>)
         : null}
         </div>
         {updateMode && (
          <button className="btn" onClick={handleUpdate} >
            Update
          </button>
        )}
        <hr className="line"/>
        <div className="author">
       <span className="author-container"> <img src={img} alt="author-pfp"/>
       <span className="author-about">
       <Link to={`/?user=${post.username}`} style={{ textDecoration:"none" , color:"inherit"}}>
       <h4> {post.username} </h4>
       </Link>
       <p> {post.about} </p></span>
       </span>
        </div>
        </div>
        </div>
            </div>
  )
}

export default VeiwPost
