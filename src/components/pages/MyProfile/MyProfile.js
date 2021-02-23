import React, { useState } from "react";
import "./MyProfile.css";
function MyProfile() {
  const [name, setName] = useState("Your Name");
  const [job, setJob] = useState("Your Title");
  const [about, setAbout] = useState(
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo"
  );
  return (
    <div className="App">
      <div className="card">
        <div className="upper-container">
          <div className="image-container">
            <img
              src="http://blogs.timesofindia.indiatimes.com/wp-content/uploads/2015/12/mark-zuckerberg.jpg"
              alt=""
              height="100px"
              width="100px"
            />
          </div>
        </div>
        <div className="lower-container">
          <h3>{name}</h3>
          <h4>{job}</h4>
          <p>{about}</p>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
