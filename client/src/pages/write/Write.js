// import Create from "../../components/create/Create";
import TopBar from "../../components/topbar/Topbar";
import Footer from "../../components/footer/Footer";
import Tags from "../../components/tags/Tags";
import ReactQuill from 'react-quill';
import {FaFileImage } from "react-icons/fa";
import 'react-quill/dist/quill.snow.css';
import "./write.css";
import { useState , useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../ContextApi/authContext";
const Write=()=>{
    const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const [ categories, setCategories] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
          username: currentUser.username,
          categories,
          title,
          desc,
        };
        if (file) {
          const data =new FormData();
          const cat = categories;
          const filename = Date.now() + file.name;
          data.append("name", filename);
          data.append("file", file);
          newPost.photo = filename;
          try {
            await axios.post("http://localhost:3002/api/pic", data);
            await axios.post("http://localhost:3002/api/categories", cat);
          } catch (err) {}
        }
        try {
          const res = await axios.post("http://localhost:3002/api/post", newPost);
          window.location.replace("/post/" + res.data._id);
        } catch (err) {}
      };

    return(
        <div className="write">
        <TopBar/>
        <div className="write-container">
       <div className="write-wrapper">
   <div className="title-wrapper">
   <h3>Create A New Post</h3>
    <form className="create-form" onSubmit={handleSubmit }>
<label htmlFor="title" className="label-of-title">
    <input type="text" className="post-title" value={title} placeholder="Enter Title Here" style={{backgroundColor:"pink"}} onChange={e=>setTitle(e.target.value)}/>
</label>
<label htmlFor="cat" className="label-of-title">
    <input type="text" className="post-title" value={categories} placeholder="Add Catorigy" style={{backgroundColor:"#fab1a0"}} onChange={e=>setCategories(e.target.value)}/>
</label>
{ file &&
<img src={URL.createObjectURL(file)} alt="null" style={{ width:"150px", height:"150px" , borderRadius:"30%" , objectFit:"cover"}}></img>}
<input
            style={{ display: "none" }}
            type="file"
            id="fileInput"
            name=""
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="fileInput" classname="label-of-img" 
          style={{
            width: "100%",
            height: "50px",
            border: "none",
            fontSize: "15px",
            color: "d63031",
            display: "flex",
            flexDirection: "row",
             alignItems: "center",
            justifyContent: "center",
            cursor:"pointer"}}>
             <FaFileImage/> Upload Image
          </label>
<label htmlFor="body" className="label-of-body">
<ReactQuill theme="snow" className="body" value={desc}  onChange={setDesc}  placeholder="Tell ur story......"/>
</label>
<label htmlFor="sumbit" className="label-of-button">
    <button type="submit"> Publish </button>
</label>
    </form>
    </div>
   </div>
   </div>
        <Tags/>
        <Footer/>
   </div>
    )
}
export default Write;