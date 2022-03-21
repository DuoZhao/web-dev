import "./../css/index.css"

const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: '../../../images/java.png',
            userName: 'Java', handle: 'Java'
        }
    }
) => {
    return (
        <div className="container" >
            <li className="list-group-item wd-bg-grey">
                <div className="row">
                    <div className="col-2">
                        <img src={who.avatarIcon} className="rounded-circle" width="50px" height="50px" alt={""}/>
                    </div>
                    <div className="col-7">
                        <b className="wd-text-white">{who.userName} <i className="fa fa-check-circle"/></b><br/><text className="wd-text-grey">@{who.handle}</text>
                    </div>
                    <div className="col-3">
                        <button type="submit" className="wd-background-white btn btn-primary rounded-pill mt-1">Follow</button>
                    </div>
                </div>
            </li>
        </div>
        );
}
export default WhoToFollowListItem;
