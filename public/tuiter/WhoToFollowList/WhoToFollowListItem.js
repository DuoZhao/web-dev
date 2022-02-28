const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item ">
            <div class="row">
                <div class="col-2">
                    <img src=${who.avatarIcon} class="rounded-circle" width="50px" height="50px">
                </div>
                <div class="col-7">
                    <b class="wd-content-white">${who.userName} <i class="fa fa-check-circle"></i></b><br><text class="wd-content-grey">@${who.handle}</text>
                </div>
                <div class="col-3">
                    <button type="submit" class="wd-background-white btn btn-primary rounded-pill mt-1">Follow</button>
                </div>
            </div>
        </li>`);
}
export default WhoToFollowListItem;
