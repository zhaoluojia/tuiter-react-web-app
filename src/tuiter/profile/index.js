import React from "react";
import {useSelector} from "react-redux";
import Profile from "./profile";

const ProfileComponent = () => {
  const profileArray = useSelector((state) => state.profile);
  return(
      <>
        {
          profileArray.map(profile =>
              <Profile
                  profile={profile}/>
          )
        }
      </>
  );
};

export default ProfileComponent;