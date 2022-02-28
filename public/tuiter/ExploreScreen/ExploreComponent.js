import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
            <div class="col-1"></div>
            <div class="row">
               <div class="col-11">
                    <div class="input-group wd-input-group">
                        <span style="position: absolute; z-index: 4; display: flex; margin-top: 11px; margin-left: 12px; height: 25px; ">
                            <i class="fa fa-search" aria-hidden="true" style="color: #50555A"></i>
                        </span>
                        <input type="text" class="form-control rounded-pill" placeholder="Search Twitter" style="padding-left: 2.375rem;">
                    </div>
                </div>
                <div class="col-1">
                    <a href="../explore-settings.html"><i class="fa fa-cog mt-1 fa-2x" style="color: grey"></i></a>
                </div>
           </div>
            <ul class="nav nav-tabs mt-2" style="border-bottom: none">
                <li class="nav-item">
                    <a class="nav-link active" href="#" style="background-color: black; color: white; border-top: none; border-left: none; border-right: none; border-bottom: #1E9CF0 5px solid">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item d-none d-lg-inline-block">
                    <a class="nav-link" href="#">Entertainment</a>
                </li>
            </ul>
            <div class="row" id="center-image" style="position: relative; margin-top: 0px">
                <img src="../spacex.jpeg" style="padding-left: 0px; padding-right: 0px;">
                <b style="position: absolute; color: white; bottom: 1px; font-size: 35px">SpaceX's Starship</b>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
