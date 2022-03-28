import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const EditProfileComponent = () => {
    const profile = useSelector(state => state.profile);
    let [firstName, setFirstName] = useState(profile[0].firstName);
    let [lastName, setLastName] = useState(profile[0].lastName);
    let [bio, setBio] = useState(profile[0].bio);
    let [location, setLocation] = useState(profile[0].location);
    let [website, setWebsite] = useState(profile[0].website);
    let [dateOfBirth, setDateOfBirth] = useState(new Date(profile[0].dateOfBirth).toISOString().split('T')[0]);
    const dispatch = useDispatch();
    const saveClickHandler = () => {
        dateOfBirth = new Date(dateOfBirth).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });
        dispatch({type: 'save-profile', firstName, lastName, bio, location, website, dateOfBirth});
    }
    return (
        <>
            <div className="container">
                <div className="row ">
                    <div className="col-1 align-self-center">
                        <Link to="/tuiter/profile"><i className="fa fa-arrow-left fa-2x text-white"/></Link>
                    </div>
                    <div className="col-8">
                        <h4 style={{margin: "0px"}}>Edit profile</h4>
                    </div>
                    <div className="col-3" style={{paddingLeft: '75px'}}>
                        <Link className="btn rounded-pill" style={{backgroundColor: "white"}} to="/tuiter/profile" onClick={saveClickHandler}>Save</Link>
                    </div>
                </div>
                <div className="row" style={{position: 'relative', marginTop: '0px'}}>
                    <img src={profile[0].bannerPicture} style={{paddingLeft: '0px', paddingRight: '0px'}} width='80%' height="200px" alt={""}/>
                    <img src={profile[0].profilePicture} style={{position: 'absolute', top: '140px', width: '130px', height: "90px"}} className="rounded-circle"  alt={""}/>
                </div>
                <div className="mt-5 form-floating position-relative">
                    <input id="first-name" value={firstName} placeholder="First Name"
                           className="form-control bg-body border-1 border-dark text-white"
                           onChange={(event) => setFirstName(event.target.value)}/>
                    <label htmlFor="first-name">First Name</label>
                </div>
                <div className="form-floating mt-3">
                    <input id="last-name" value={lastName} placeholder="Last Name"
                           className="form-control bg-body border-1 border-dark text-white"
                           onChange={(event) => setLastName(event.target.value)}/>
                    <label htmlFor="last-name">Last Name</label>
                </div>
                <div className="form-floating mt-3">
                    <textarea id="bio" value={bio} placeholder="Bio"
                  className="form-control bg-body border-1 border-dark text-white"
                  onChange={(event) => setBio(event.target.value)}/>
                    <label htmlFor="bio">Bio</label>
                </div>
                <div className="form-floating mt-3">
                    <input id="location" value={location} placeholder="Location"
                           className="form-control bg-body border-1 border-dark text-white"
                           onChange={(event) => setLocation(event.target.value)}/>
                    <label htmlFor="location">Location</label>
                </div>
                <div className="form-floating mt-3">
                    <input id="website" value={website} placeholder="Website"
                           className="form-control bg-body border-1 border-dark text-white"
                           onChange={(event) => setWebsite(event.target.value)}/>
                    <label htmlFor="website">Website</label>
                </div>
                <div className="form-floating mt-3">
                    <input id="date-of-birth" value={dateOfBirth} placeholder="Date of Birth"
                           className="form-control bg-body border-1 border-dark text-white" type="date"
                           onChange={(event) => setDateOfBirth(event.target.value)}/>
                    <label htmlFor="date-of-birth">Date of Birth</label>
                </div>
            </div>
        </>
    );
}
export default EditProfileComponent;
