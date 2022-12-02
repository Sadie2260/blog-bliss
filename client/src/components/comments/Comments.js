import "./commemts.css"
import img2 from "../header/imgs/6.webp"
const Comments = () => {
  return (
      <section className='comments-container'>
      <span> <h3 className="hd">Comments</h3> </span>
      <div className="comments">
      <div className='comments-wrapper'>
     
        <img src={img2} alt="img2"></img>
        <div className='Single-comment-content'>
       <span className='comment-content'>
            <h5> username</h5>
            <span className='reply'>
                <a href='/home' className='comment-rply' > replay </a> 
                <span className='Ttime'> 12:10 12-1-2022</span>
            </span>
            <p className='c '>
                i love this blog
            </p>
            </span>
            </div>
            </div>
        </div>
        <div className="insert-comment-container">
            <h4> Leave a comment</h4>
            <div className="comment-input-container">
            <input type="text" className="comment-input" placeholder="Type Here......" />
            <button> Submit </button>
            </div>
            </div>
      </section>
  )
}

export default Comments
