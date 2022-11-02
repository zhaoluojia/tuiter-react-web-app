import React from "react";
import {useSelector} from "react-redux";
import EditProfile from "./edit-profile";

const EditProfileComponent = () => {
  const profileArray = useSelector((state) => state.profile);
  return(
      <>
        {
          profileArray.map(profile =>
              <EditProfile
                  profile={profile}/>
          )
        }
      </>
  );
};

export default EditProfileComponent;