import "./create.css";
import ReactQuill from 'react-quill';
import {FaFileImage } from "react-icons/fa";
import 'react-quill/dist/quill.snow.css';
import axios from "axios";
import { useState, useContext } from "react";
import { AuthContext } from "../../ContextApi/authContext";
function Create() {
    const [title, setTitle]=useState("");
    const [cat, setCat]=useState("");
    const [desc, setDesc]=useState("")
    const [file, setFile]=useState(null)
    const {currentUser}=useContext(AuthContext)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
          username: currentUser.username,
          title,
          desc,
        };
        if (file) {
          const data =new FormData();
          const filename = Date.now() + file.name;
          data.append("name", filename);
          data.append("file", file);
          newPost.photo = filename;
          try {
            await axios.post("/upload", data);
          } catch (err) {}
        }
        try {
          const res = await axios.post("/posts", newPost);
          window.location.replace("/post/" + res.data._id);
        } catch (err) {}
      };
  return (
       <div className="write-container">
       <div className="write-wrapper">
   <div className="title-wrapper">
   <h3>Create A New Post</h3>
    <form className="create-form">
<label htmlFor="title" className="label-of-title">
    <input type="text" className="post-title" placeholder="Enter Title Here"/>
</label>
<label htmlFor="img" className="label-of-img"> 
<img src={URL.createObjectURL(file)}></img>
<button>
<FaFileImage className="write-icon"/> Upload image
    <input type="file" className="post-pic" style={{ display:"none"}} ></input> </button>
</label>
<label htmlFor="body" className="label-of-body">
<ReactQuill theme="snow" className="body" placeholder="Tell ur story......"/>
</label>
<label htmlFor="sumbit" className="label-of-button">
    <button> Publish </button>
</label>
    </form>
    </div>
   </div>
   </div>
  )
}

export default Create
