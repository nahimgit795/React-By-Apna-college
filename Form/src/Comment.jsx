import { useState } from "react";

export default function Comment() {
  let [formData, setFormdata] = useState({
    username: "",
    remarks: "",
    rating: 5
  });

  let handleInputChange = (event) => {
    setFormdata((curData) => {
      return { ...curData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    if(!formData. username){
      console.log("username is null");
      return 
    }
    console.log(formData);
    event.preventDefault();
  };

  return (
    <div>
      <h4>Give some comment</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">UserName</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <br />
        <br />

        <label htmlFor="remarks">Remark</label>
        <textarea
          id="remarks"
          name="remarks"
          placeholder="add remarks"
          value={formData.remarks}
          onChange={handleInputChange}
        />
        <br />
        <br />

        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          id="rating"
          name="rating"
          placeholder="rating"
          min={1}
          max={5}
          value={formData.rating}
          onChange={handleInputChange}
        />
        <br />
        <br />

        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}
