import React from "react";
import {FaHome, FaTwitter, FaHashtag, FaBell, FaBookmark} from "react-icons/fa";
import {HiMail} from "react-icons/hi";
import {IoListSharp} from "react-icons/io5";
import {CgProfile, CgMoreO} from "react-icons/cg";

const NavigationSidebar = (
    {
      active = 'explore'
    }
) => {
  return (
      <div>
        <div className="list-group">
          <a className="list-group-item">
            <FaTwitter />
          </a>
          <a className={`list-group-item
                      ${active === 'home'?'active':''}`}>
            <FaHome />
            <div className="d-none d-xl-inline ms-1">Home</div>
          </a>
          <a className={`list-group-item
                      ${active === 'explore'?'active':''}`}>
            <FaHashtag />
            <div className="d-none d-xl-inline ms-1">Explore</div>
          </a>
          <a className={`list-group-item
                      ${active === 'notifications'?'active':''}`}>
            <FaBell />
            <div className="d-none d-xl-inline ms-1">Notifications</div>
          </a>
          <a className={`list-group-item
                      ${active === 'messages'?'active':''}`}>
            <HiMail />
            <div className="d-none d-xl-inline ms-1">Messages</div>
          </a>
          <a className={`list-group-item
                      ${active === 'bookmarks'?'active':''}`}>
            <FaBookmark />
            <div className="d-none d-xl-inline ms-1">Bookmarks</div>
          </a>
          <a className={`list-group-item
                      ${active === 'lists'?'active':''}`}>
            <IoListSharp />
            <div className="d-none d-xl-inline ms-1">Lists</div>
          </a>
          <a className={`list-group-item
                      ${active === 'profile'?'active':''}`}>
            <CgProfile />
            <div className="d-none d-xl-inline ms-1">Profile</div>
          </a>
          <a className={`list-group-item
                      ${active === 'more'?'active':''}`}>
            <CgMoreO />
            <div className="d-none d-xl-inline ms-1">More</div>
          </a>
        </div>
        <div className="d-grid mt-2">
          <a className="btn btn-primary btn-block rounded-pill">
          Tweet
          </a>
        </div>
      </div>
  );
};

export default NavigationSidebar;