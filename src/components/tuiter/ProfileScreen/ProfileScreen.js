import React from "react";
import NavigationSidebar from "../NavigationSidebar/index";
import ProfileComponent from "./ProfileComponent";
import {useSelector} from "react-redux";

const ProfileScreen = () => {
    const profile = useSelector(state => state.profile);
    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="profile"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6">
                <ProfileComponent profile={profile}/>
            </div>
        </div>
    );
};
export default ProfileScreen;
