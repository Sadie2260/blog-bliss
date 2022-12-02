import Post from "../../components/post/PostCard";
import "./infoSection.css";
import PostData from "../post/PostData";
import Tags from "../tags/Tags";
import Footer from "../footer/Footer";
export default function InfoSection({posts}) {
  return (
    <>
    <section className="info-s">
    <div className="info-wrapper">
    <div className="heading">
    <h1> What's New</h1> 
    </div>
    <div className="allpost-Wrapper">
    <Post post={posts}/>
    </div>
    </div>
    <Tags/>
    <Footer/>
    </section>
    </>
  )
}