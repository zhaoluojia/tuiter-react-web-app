import React from "react";
import PostSummaryList from "../post-summary-list";
import {Link} from "react-router-dom";
import "./index.css";

const ExploreComponent = () => {
  return(
      <>
        <div className="row">
          <div className="col-11 position-relative">
            <input placeholder="Search Tuiter" className="form-control rounded-pill ps-5"/>
            <i className="bi bi-search position-absolute wd-nudge-up"></i>
          </div>
          <div className="col-1">
            <i className="wd-bottom-4 text-primary float-end bi bi-gear-fill fs-4 position-relative"></i>
          </div>
        </div>
        <ul className="nav nav-tabs mb-2">
          <li className="nav-item">
            <Link className="nav-link active">For You</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link">Trending</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link">News</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link">Sports</Link>
          </li>
          <li className="nav-item d-none d-md-block">
            <Link className="nav-link">Entertainment</Link>
          </li>
        </ul>
        <div className="position-relative mb-2">
          <img alt="" src="/images/starship.png" className="w-100"/>
          <h2 className="position-absolute wd-text-in-img">
            SpaceX's Starship</h2>
        </div>
        <PostSummaryList/>
      </>
  );
};

export default ExploreComponent;