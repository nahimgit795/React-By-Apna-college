import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    username: ""
  });

  let handleInputChange = (event) => {
    let { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted:", formData);

    // reset fields
    setFormData({
      fullName: "",
      username: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">Full Name</label>
      <input
        type="text"
        placeholder="Enter your name"
        value={formData.fullName}
        onChange={handleInputChange}
        name="fullName"
        id="fullName"
      />
      <br />
      <br />

      <label htmlFor="username">User Name</label>
      <input
        type="text"
        placeholder="Enter username"
        value={formData.username}
        onChange={handleInputChange}
        name="username"
        id="username"
      />
      <br />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}
