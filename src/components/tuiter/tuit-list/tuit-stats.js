import React from "react";
import {useDispatch} from "react-redux";
import {updateTuit} from "../../actions/tuits-actions";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const updateLike = () => {
        tuit.stats.likes = tuit.stats.likes + 1;
        tuit.liked = true;
        updateTuit(dispatch, tuit);
    }

    return (
        <>
            {
                tuit.likes &&
                <div className="row">
                    <span className="col-3" onClick={updateLike}>
                    {tuit.liked && <i className="fas fa-heart me-1" style={{color: 'red'}}/>}
                    {!tuit.liked && <i className="fas fa-heart me-1"/>}
                    {tuit.likes}
                    </span>
                    <span className="col-3"><i className="fa fa-arrow-up-from-bracket"/></span>
                </div>
            }
        </>
    );
}
export default TuitStats;