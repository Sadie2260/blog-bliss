import Topbar from "../../components/topbar/Topbar";
import Footer from "../../components/footer/Footer";
import image  from "../../components/header/imgs/1.jpeg";
import "./about.css";
const About=()=>{
    return(
        <div className="about">
        <Topbar/>
    <div  className="about-container">
    <div className="about-wrapr">
    <div className="about-top">
        <h3> Welcome to our Site </h3>
    </div>
    <div className="term">
    <h4> Terms and Condition</h4>
        <p>
1. Definitions and Interpretation <br/>
2. Information About Us <br/>
3. Access to Our Site <br/>
4. Accounts <br/>
5. Intellectual Property Rights <br/>
6. Blogs, Posts and Comments <br/>
1. Definitions and Interpretation <br/>
2. Information About Us <br/>
3. Access to Our Site <br/>
4. Accounts <br/>
5. Intellectual Property Rights <br/>
6. Blogs, Posts and Comments 
        </p>
        <hr/>
    </div>
    <div className="login-section">
        <img src={image}/>
        <span> join our Site   <br/><button> login </button></span>
      
    </div>
    </div>
    </div>
    <Footer/>
    </div>)
}
export default About;