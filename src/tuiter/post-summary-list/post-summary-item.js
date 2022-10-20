import React from "react";
import {BsCheckCircleFill} from "react-icons/bs";

const PostSummaryItem = (
    {post}
) => {
  return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-10">
            <div class="text-secondary">{post.topic}</div>
            <div>
              <span className="fw-bold me-1">{post.userName}</span>
              <BsCheckCircleFill />
              <span class="text-secondary"> · {post.time}</span>
            </div>
            <div className="fw-bold">{post.title}</div>
          </div>
          <div className="col-2">
            <img alt="" width={70} className="float-end rounded-3" src={`/images/${post.image}`}/>
          </div>
        </div>
      </li>
  );
};

export default PostSummaryItem;