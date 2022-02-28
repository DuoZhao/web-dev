import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
            <div class="col-2 col-md-2 col-lg-2 col-xl-2">
                ${NavigationSidebar()}
            </div>
            <div class="mt-1 col-xxl-5 col-xl-6 col-lg-7 col-md-8 col-sm-8 col-8">
                ${ExploreComponent()}
            </div>
            <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                ${WhoToFollowList()}
            </div>
        </div>
    `);
})($);