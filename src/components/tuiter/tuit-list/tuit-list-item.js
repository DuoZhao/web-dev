import React from "react";
import {useDispatch} from "react-redux";


const TuitListItem = (
    {
        tuit = {
            "_id": "123",
            "topic": "Web Development",
            "postedBy": {
                "username": "ReactJS"
            },
            "liked": true,
            "verified": false,
            "handle": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "logo-image": "bear.jpeg",
            "avatar-image": "../../../images/react-blue.png",
            "attachments": {
                "video": "https://www.youtube.com/watch?v=unKvMC3Y1kI"
            },
            "stats": {
                "comments": 123,
                "retuits": 234,
                "likes": 345
            }
        }
    }
) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };

    const deleteTuit = (tuit) => {
        dispatch({type: 'delete-tuit', tuit})
    };
    const element = <div className="row ms-2 mt-2" id="wd-subcontent">
        <b className="wd-text-white">{tuit.topic}</b><br/>
        <text style={{color: `rgb(110, 118, 125)`}}>{tuit.title}</text>
        <a href={tuit.href} style={{color: `rgb(110, 118, 125)`, textDecoration: 'none'}}> <i className="fa fa-link"/>{tuit.website}</a>
    </div>
    const video = <div className="row">
        <iframe
                src={tuit.attachments && tuit.attachments.video ? tuit.attachments.video : ''}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
        </iframe>
    </div>
    const image = <div className="row">
        <img src={tuit.attachments && tuit.attachments.image ? tuit.attachments.image : ''} width="100%" height="100%" style={{borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}} alt={""}/>
    </div>
    return(
        <div>
            <div className="row">
                <div className="col-1">
                    <img src={tuit["avatar-image"]} className="rounded-circle" width="40px" height="40px" alt={""}/>
                </div>
                <div className="col-11">
                    <b className="wd-text-white">{tuit.name} <i className="fa fa-check-circle"/></b><text style={{color: `rgb(110, 118, 125)`}}>  @{tuit.postedBy.username} &middot; {tuit.time}</text>
                    <i onClick={() => deleteTuit(tuit)} className="fa fa-trash fa-pull-right"/>
                    <br/>
                    <text className="wd-text-white">{tuit.tuit}</text>
                    <div className="container border border-secondary rounded-3" style={{padding: '0px'}}>
                        {tuit.attachments && tuit.attachments.image ? image : ''}
                        {tuit.attachments && tuit.attachments.video ? video : ''}
                        {/*{!tuit.containTitle ? '' : element}*/}
                    </div>
                    <div className="container mt-1 mb-1">
                        <text style={{color: `rgb(110, 118, 125)`}}>
                            <i className="fa fa-comment"/>&nbsp;{tuit.stats.comments}&emsp;&emsp;&emsp;&emsp;
                            <i className="fa fa-retweet"/>&nbsp;{tuit.stats.retuits}&emsp;&emsp;&emsp;&emsp;
                            {/*<i className="fa fa-heart" style={tuit.liked ? {color: "red"} : {}}/>&nbsp;{tuit.stats.likes}&emsp;&emsp;&emsp;&emsp;*/}
                            <span onClick={likeTuit}>{tuit.liked && <i className="fas fa-heart me-1" style={{color: 'red'}}/>}{!tuit.liked && <i className="far fa-heart me-1"/>}{tuit.stats && tuit.stats.likes}</span>&emsp;&emsp;&emsp;&emsp;
                            <i className="fa fa-share"/></text>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    );
}

export default TuitListItem;