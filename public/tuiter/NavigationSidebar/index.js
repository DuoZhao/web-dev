const NavigationSidebar = () => {
    return (`
        <div class="list-group">
            <a class="list-group-item" href="/"><i class="fab fa-twitter"></i></a>
            <a href="../home.html" class="list-group-item list-group-item-action"><i class="fa fa-home"></i> <div class="d-none d-xl-inline-block">Home</div></a>
            <a href="../explore.html" class="list-group-item list-group-item-action active"><i class="fa fa-hashtag"></i> <div class="d-none d-xl-inline-block">Explore</div></a>
            <a href="../notifications.html" class="list-group-item list-group-item-action"><i class="fa fa-bell"></i> <div class="d-none d-xl-inline-block">Notifications</div></a>
            <a href="../messages.html" class="list-group-item list-group-item-action"><i class="fa fa-envelope"></i> <div class="d-none d-xl-inline-block">Message</div></a>
            <a href="../bookmarks.html" class="list-group-item list-group-item-action"><i class="fa fa-bookmark"></i> <div class="d-none d-xl-inline-block">Bookmarks</div></a>
            <a href="../lists.html" class="list-group-item list-group-item-action"><i class="fa fa-list"></i> <div class="d-none d-xl-inline-block">Lists</div></a>
            <a href="../profile.html" class="list-group-item list-group-item-action"><i class="fa fa-user"></i> <div class="d-none d-xl-inline-block">Profile</div></a>
            <a href="#" class="list-group-item list-group-item-action"><i class="fa fa-caret-square-right"></i> <div class="d-none d-xl-inline-block">More</div></a>
        </div>
        <div class="d-grid mt-2">
            <a href="tweet.html"
               class="btn btn-primary btn-block rounded-pill">
                Tweet</a>
        </div>
    `);
}
export default NavigationSidebar;
