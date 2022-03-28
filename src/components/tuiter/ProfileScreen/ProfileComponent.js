import React from "react";
import {Link} from "react-router-dom";

const ProfileComponent = (
    {
        profile = {
            firstName: 'Duke', lastName: 'Zhao', handle: 'dukezhao',
            profilePicture: 'jose.png', 	bannerPicture: 'polyglot.png',
            bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.',
            website: 'youtube.com/webdevtv',
            birth: 'Born February 16, 1996'
        }
    }
) => {
    return (
        <>
            <div className="container">
                <div className="row ">
                    <div className="col-1 align-self-center">
                        <i className="fa fa-arrow-left fa-2x"/>
                    </div>
                    <div className="col-5">
                        <h4 style={{margin: "0px"}}>{profile[0].firstName + ' ' + profile[0].lastName}</h4>
                        <span style={{fontSize: '12px'}}>5,123 Tweets</span>
                    </div>
                </div>
                <div className="row" style={{position: 'relative', marginTop: '0px'}}>
                    <img src={profile[0].bannerPicture} style={{paddingLeft: '0px', paddingRight: '0px'}} width='80%' height="200px" alt={""}/>
                    <img src={profile[0].profilePicture} style={{position: 'absolute', top: '140px', width: '130px', height: "90px"}} className="rounded-circle"  alt={""}/>
                    <div className="col-9"/>
                    <div className="col-3 align-self-end"><Link style={{backgroundColor: "black"}} className="btn btn-light ms-1 mt-2 rounded-pill" to="/tuiter/profile-edit">Edit profile</Link></div>
                </div>
                <div className="row">
                    <h5 style={{margin: "0px"}}>{profile[0].firstName + ' ' + profile[0].lastName}</h5>
                    <text>@{profile[0].handle}</text>
                    <p> </p>
                    <p style={{color: 'white'}}>{profile[0].bio}</p>
                    <text><i className="fa fa-location-arrow"/> {profile[0].location}   <i className="fa fa-birthday-cake"/> Birth {profile[0].dateOfBirth}   <i className="fa fa-calendar"/>   Joined {profile[0].dateJoined}</text>
                    <text><span style={{color: "white"}}>{profile[0].followingCount}</span> Following       <span style={{color: "white"}}>{profile[0].followersCount}</span> Followers</text>
                </div>
            </div>
        </>
    );
}
export default ProfileComponent;
