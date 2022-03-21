const NavigationSidebar = () => {
    return (`
        <div class="list-group">
            <a class="list-group-item disabled" href="/"><i class="fab fa-twitter" style="color: white"></i></a>
            <a href="../HomeScreen/home.html" class="list-group-item list-group-item-action" id="home"><i class="fa fa-home"></i> <div class="d-none d-xl-inline-block">Home</div></a>
            <a href="../ExploreScreen/explore.html" class="list-group-item list-group-item-action" id="explore"><i class="fa fa-hashtag"></i> <div class="d-none d-xl-inline-block">Explore</div></a>
            <a href="#" class="list-group-item list-group-item-action wd-sb-action"><i class="fa fa-bell" ></i> <div class="d-none d-xl-inline-block">Notifications</div></a>
            <a href="#" class="list-group-item list-group-item-action wd-sb-action"><i class="fa fa-envelope"></i> <div class="d-none d-xl-inline-block">Message</div></a>
            <a href="#" class="list-group-item list-group-item-action wd-sb-action"><i class="fa fa-bookmark"></i> <div class="d-none d-xl-inline-block">Bookmarks</div></a>
            <a href="#" class="list-group-item list-group-item-action wd-sb-action"><i class="fa fa-list"></i> <div class="d-none d-xl-inline-block">Lists</div></a>
            <a href="#" class="list-group-item list-group-item-action wd-sb-action"><i class="fa fa-user"></i> <div class="d-none d-xl-inline-block">Profile</div></a>
            <a href="#" class="list-group-item list-group-item-action wd-sb-action"><i class="fa fa-caret-square-right"></i> <div class="d-none d-xl-inline-block">More</div></a>
        </div>
        <div class="d-grid mt-2">
            <a href="tweet.html"
               class="btn btn-primary btn-block rounded-pill">
                Tweet</a>
        </div>
        <script>
            $(function() {
                var url = window.location.href;
                var token = url.split('/');
                var index = token[token.length-1].split('.');/
                var name = "#" + index[0];
                $(".list-group .list-group-item").removeClass("active");
                $(name).addClass("active");
                $('.wd-sb-action').click(function () {
                   $('#home').removeClass("active");
                   $('#explore').removeClass("active");
                });
            });
        </script>
    `);
}
export default NavigationSidebar;
