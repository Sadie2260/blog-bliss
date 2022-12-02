import "./postCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css"
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import { useEffect } from "react";
const Post = ( { post }) => {
  const PF = "http://localhost:3002/images/"
  useEffect(()=>{
    Aos.init({duration:2000 });
  },[]);
  return (
    <div className="Post-Container" >
   {post.map((post)=>{
    return(<div className="PostWrapper" data-aos="fade-up">
{post.photo &&<img className="postimg" src={ PF + post.photo} alt="post Cover"/>}
<div className="post-info">
    <div className="Post-content">
    <span className="title"> 
      {post.title}
    </span>
    
    </div>
    <div className="small-data">
    <span className="date"> {new Date(post.createdAt).toDateString()} </span> {post.categories.map((c)=>{
      <span className="tags"> {c.name}</span> 
    }
    )}  <span className="chats">| <FontAwesomeIcon icon={ faMessage}/> {post.Chats}  </span> </div>
    <div className="desc-Wrapper">
    <span className="desc" dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}>
      {/* {post.desc} */}
      </span>
      </div>
    <Link to={`/post/${post._id}`}><button className="button"> Read More</button></Link>
    </div>
    </div>)
   })}
    </div>)
}

export default Post
