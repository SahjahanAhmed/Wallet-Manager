import React from "react";
import img from '../../images/SJ4.png'

import "./profile.css";
const Profile = () => {
    return <div className="profile">
      <img className="profile-picture" src={img} alt="" />
  </div>;
};

export default Profile;
