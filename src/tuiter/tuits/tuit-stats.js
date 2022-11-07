import React from "react";
import {FaRegComment, FaRetweet} from "react-icons/fa";
import {RiShareBoxFill} from "react-icons/ri";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitStats = (
    {tuit}
) => {
  const dispatch = useDispatch();
  return (
    <div className="row mt-2">
      <div className="col col-2">
        <FaRegComment />
        <span className="ms-2">{tuit.replies}</span>
      </div>
      <div className="col col-2">
        <FaRetweet />
        <span className="ms-2">{tuit.retuits}</span>
      </div>
      <div className="col col-3">
        Likes: {tuit.likes}
        <i onClick={() => dispatch(updateTuitThunk({
          ...tuit,
          likes: tuit.likes + 1
        }))} className="bi bi-heart-fill me-2 text-danger"></i>
      </div>
      <div className="col col-3">
        Dislikes: {tuit.dislikes}
        <i onClick={() => dispatch(updateTuitThunk({
          ...tuit,
          dislikes: tuit.dislikes + 1
        }))} className="bi bi-hand-thumbs-down-fill me-2"></i>
      </div>
      <div className="col col-2">
        <RiShareBoxFill />
      </div>
    </div>
  );
};

export default TuitStats;