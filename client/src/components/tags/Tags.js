import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./tags.css";
function Tags() {
  const [tags, setTags]=useState([])
  useEffect (()=>{
    const getTags= async ()=>{
      const res = await axios.get("http://localhost:3002/api/categories");
      setTags(res.data);
    }
    getTags();
  },[])
  return (
      <section className="tags-section">
<div className="tags-container">
<h1> Tags</h1>
<div className="tags-wrap">
{tags.map((T)=>{
  return(
    <Link to={`/?cat=${T.name}`} style={{ textDecoration:"none" , color:"inherit"}}>
  <span>{T.name}</span>
  </Link>)})}
</div>
<hr/>
</div>
      </section>
  )
}

export default Tags;
