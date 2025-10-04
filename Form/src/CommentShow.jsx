import { useState } from "react"
import "./Comment.css";
export default   function CommentShow (addNewComment){
    let [comments,setcomment]=useState([{
        username:"@nahim" ,
        remarks:"greak job",
        rating:4
    }]);
   let addNewComment=(comment)=>{
      setcomment((currComment)=>[...currComment,comment]);
  }
    return (<div>
        <h3>All comment</h3>
        <div className="comments">
            <span>{comments[0].remarks}</span>
            <br />
            <span>(rating={comments[0].rating})</span>
            <p> {comments[0].username}</p>
        </div>
        <hr />
        <CommentShow addNewComment={addNewComment}/>
    </div>)
}