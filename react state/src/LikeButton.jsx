import { useState } from "react";

export default function LikeButton() {
  let [isLiked, setLiked] = useState(false);
  let [clicks,setclicks]=useState(0);
  let toggleLike = () => {
    let newVal = !isLiked;
    setLiked(newVal);     
    setclicks(clicks+1);
       // ✅ update state
    console.log(newVal);
  };
  return (
    <div>
        <p>clicks={clicks}</p>
      <p onClick={toggleLike} style={{ cursor: "pointer" }}>
        {isLiked ? (
          <i className="fa-solid fa-heart" style={{ color: "red" }}></i> // filled heart
        ) : (
          <i className="fa-regular fa-heart"></i> // outline heart
        )}
      </p>
    </div>
  );
}
