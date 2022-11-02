import React from "react";
import {useSelector, useDispatch} from "react-redux";
import "./index.css"
import {Link} from "react-router-dom";
import {IoIosArrowForward} from "react-icons/io";
import {updateName, updateBio, updateLocation, updateWebsite, updateDateOfBirth} from "../reducers/profile-reducer";
import {useState} from "react";

const EditProfile = (
    {profile}
) => {
  const [name, updateName] = useState({firstName: profile.firstName});
  const [bio, updateBio] = useState({bio: profile.bio});
  const [location, updateLocation] = useState({location: profile.location});
  const [website, updateWebsite] = useState({website: profile.website});
  const [dateOfBirth, updateDateOfBirth] = useState({dateOfBirth: profile.dateOfBirth});
  const dispatch = useDispatch();
  const saveProfileClickHandler = () => {
    dispatch(updateName(name))
    dispatch(updateBio(bio))
    dispatch(updateLocation(location))
    dispatch(updateWebsite(website))
    dispatch(updateDateOfBirth(dateOfBirth))
  }
  const nameChangeHandler = (event) => {
    const nameValue = event.target.value;
    const newName = {
      firstName: nameValue
    };
    updateName(newName);
  }
  const bioChangeHandler = (event) => {
    const bioValue = event.target.value;
    const newBio = {
      bio: bioValue
    };
    updateBio(newBio);
  }
  const locationChangeHandler = (event) => {
    const locationValue = event.target.value;
    const newLocation = {
      location: locationValue
    };
    updateLocation(newLocation);
  }
  const websiteChangeHandler = (event) => {
    const websiteValue = event.target.value;
    const newWebsite = {
      location: websiteValue
    };
    updateWebsite(newWebsite);
  }
  const dateOfBirthChangeHandler = (event) => {
    const dateOfBirthValue = event.target.value;
    const newDateOfBirth = {
      dateOfBirth: dateOfBirthValue
    };
    updateDateOfBirth(newDateOfBirth);
  }
  return(
      <div>
        <div className="row ms-2">
          <div className="col-1">
            <Link to="../profile" className="wd-text-link">
              X
            </Link>
          </div>
          <div className="col-9">
            <h5 className="fw-bold mb-2">Edit Profile</h5>
          </div>
          <div className="col-2 mb-2">
            <Link to="../profile" onClick={saveProfileClickHandler}
                  className="btn btn-primary btn-block rounded-pill float-end">
              Save
            </Link>
          </div>
        </div>
        <div className="position-relative">
          <div>
            <img alt="" width="100%" height="200" src={`/images/${profile.bannerPicture}`}/>
          </div>
          <div>
            <img alt="" className="wd-profile-picture-pos rounded-circle ms-3" width="100px" height="100px"
                 src={`/images/${profile.profilePicture}`}/>
          </div>
        </div>
        <div className="row wd-main-profile-pos ms-3 me-3">
          <label>Name
            <input className="form-control border-0"
                   onChange={nameChangeHandler}
                   defaultValue={profile.firstName}
            />
          </label>
          <label className="mt-4">Bio
            <input className="form-control border-0"
                   onChange={bioChangeHandler}
                   defaultValue={profile.bio}
            />
          </label>
          <label className="mt-4">Location
            <input className="form-control border-0"
                   onChange={locationChangeHandler}
                   defaultValue={profile.location}
            />
          </label>
          <label className="mt-4">Website
            <input className="form-control border-0"
                   onChange={websiteChangeHandler}
                   defaultValue={profile.website}
            />
          </label>
          <label className="mt-4">Birth Date
            <input className="form-control border-0"
                   onChange={dateOfBirthChangeHandler}
                   defaultValue={profile.dateOfBirth}
            />
          </label>
          <div className="row p-0 mt-4 ms-3">
            <div className="col-11 p-0">Switch to professional</div>
            <div className="col-1 p-0">
              <div className="me-3 float-end">
                <IoIosArrowForward/>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default EditProfile;