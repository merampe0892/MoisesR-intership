import React from "react";
import "./Author.css";

const AuthorSkeleton = () => {
  return (
    <div className="d_profile de-flex">
      <div className="de-flex-col">
        <div className="profile_avatar">
          <div className="skeleton-box"></div>
          <i className="fa fa-check"></i>
          <div className="profile_name">
            <h4>
              <div className="skeleton-box skeleton-author"></div>
              <span className="skeleton-box skeleton-username"></span>
              <span id="wallet" className="skeleton-box skeleton-wallet"></span>
            </h4>
          </div>
        </div>
      </div>
      <div className="profile_follow de-flex">
        <div className="de-flex-col">
          <div className="profile-follower">
            <div className="skeleton-box skeleton-follower"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorSkeleton;
