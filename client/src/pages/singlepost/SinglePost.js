import "./singlepost.css";
import Footer from "../../components/footer/Footer"
import VeiwPost from "../../components/Veiwpost/VeiwPost";
import Tags from "../../components/tags/Tags";
import Topbar from "../../components/topbar/Topbar";
const SinglePost = () => {
 
  return (
    <div className="single-post">
      <Topbar/>
      <VeiwPost/>
      <Tags/>
      <Footer/>
    </div>
  )
}

export default SinglePost
