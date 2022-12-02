import "./profile.css";
import img1 from "../../components/header/imgs/6.webp";
import {FaUserPlus} from "react-icons/fa";
import Topbar from "../../components/topbar/Topbar";
import {useState , useContext} from "react";
import { AuthContext } from "../../ContextApi/authContext";
import axios from "axios";
function Profile() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [about, setabout]=useState("");
  const [success, setSuccess] = useState(false);

  const { currentUser,dispatch } = useContext(AuthContext);
  const PF = "http://localhost:3002/images/"

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {

      userId: currentUser._id,
      username,
      email,
      about,
      password,

    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilepic = filename;
      try {
        await axios.post("http://localhost:3002/api/pic", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("http://localhost:3002/api/user/" +currentUser._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3002/api/user/${currentUser._id}`, {
        data: {  userId : currentUser._id  },
      });
      window.location.replace("/register");
    } catch (err) {
      console.log(err)
    }
  };
  return (
    <div className="user-page">
    <Topbar/>
    <div className="user-page-container">
    <div className="user-page-cover">
      <div className="user-page-wrapper">
    <h3> Update Your Profile</h3>
<form className="profile-form" onSubmit={handleSubmit}>
<img src={file ? URL.createObjectURL(file) : PF + currentUser.profilepic} alt="pfp"/>
  <label htmlFor="fileInput" className="profile-pic"> 
  <FaUserPlus className="i-con"/>
  <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
    {/* <input type="file" style={{position:"absolute", display:"none" , borderRadius:"20px"}} onChange={(e) => setFile(e.target.files[0])}></input> */}
  </label>
  <label htmlFor="name" className="profile-name-label"> 
    <input type="text" className="profile-name" placeholder={currentUser.username}
            onChange={(e) => setUsername(e.target.value)}/>
  </label>
  <label htmlFor="email" className="profile-email-label"> 
    <input type="email" className="profile-email" placeholder={currentUser.email} 
            onChange={(e) => setEmail(e.target.value)}/>
  </label>
  <label htmlFor="password" className="profile-password-label"> 
    <input type="password" className="profile-password" placeholder="Edit ur password" onChange={(e) => setPassword(e.target.value)}/>
  </label>
  <label> About me:
  <input htmlFor="about" className="user-about" placeholder={currentUser.about} onChange={(e)=> setabout(e.target.value)}/> 
</label>
  <label htmlFor="button" className="profile-button-label">
  <span className="settingsDeleteTitle" style={{cursor:"pointer", fontWeight:"bold"}} onClick={handleDelete}>Delete Account</span>
    <button className="profile-button" type="submit">Update</button>
    <br/>
    {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
  </label>
</form>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Profile;
