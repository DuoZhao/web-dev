import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";
import React from "react";

const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);
    return(
        <div>
            {
                who.map && who.map(who => <WhoToFollowListItem who={who}/>)
            }
        </div>
    );
}

export default WhoToFollowList
