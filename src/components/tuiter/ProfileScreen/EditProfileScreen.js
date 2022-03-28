import React from "react";
import EditProfileComponent from "./EditProfileComponent";
const EditProfileScreen = () => {
    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6">
                <EditProfileComponent/>
            </div>
        </div>
    );
};
export default EditProfileScreen;
