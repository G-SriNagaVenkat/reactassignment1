import React from "react";
import "./ProfileCard.css";
import profilephoto from './reigan.jpg'
const ProfileCard = () => {
  return (
    <div className="app">
    <div className="profile-card">
      <img
        src={profilephoto}
        alt="Profile"
        className="profile-image"
      />
      <h2 className="profile-name">Sri naga venkat</h2>
      <p className="profile-title">Web Developer</p>
      <p className="profile-bio" >
        Passionate about coding and design. Love to build interactive web
        experiences.
      </p>
      <h1>Roll Num: <b>2211CS010190</b></h1>
    </div>
    </div>
  );
};

export default ProfileCard;
