import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";
import {deleteTuit, updateTuit} from "../../actions/tuits-actions";

const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();
    const update = () => {
        if (tuit.liked) {
            tuit.liked = false;
            tuit.likes = tuit.likes-1;
        } else {
            tuit.liked = true;
            tuit.likes = tuit.likes+1;
        }
        updateTuit(dispatch, tuit);
    }
    return(
        <li className="list-group-item d-flex border-secondary justify-content-between">
            {tuit.avatarImage && <img src={tuit.avatarImage} className="img-fluid rounded-circle wd-avatar-icon" alt="" />}
            <div className="ms-2 me-auto w-100">
                <div className="d-flex justify-content-between">
                    <div>
                        {tuit.postedBy && tuit.postedBy.username && <span className="fw-bold">{tuit.postedBy.username} </span>}
                        {tuit.handle && <span className="text-secondary"> @{tuit.handle}</span>}
                    </div>
                    <div><i onClick={() => deleteTuit(dispatch, tuit)} className="fa fa-trash fa-pull-right"/></div>
                </div>
                <div>{tuit.tuit}</div>
                <span className="col-3" onClick={update}>
                {
                    tuit.liked && <i className="fas fa-heart me-1" style={{color: 'red'}}/>
                }
                {
                    !tuit.liked && <i className="far fa-heart me-1"/>
                }
                {tuit.likes}
          </span>
            </div>
        </li>
    );
};

export default TuitListItem;