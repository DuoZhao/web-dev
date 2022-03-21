import React from "react";
import "./../css/index.css"
import {Link} from "react-router-dom";

const NavigationSidebar = () => {

    return (
        <div className="container">
            <div className="list-group">
                <Link to="/" className="list-group-item disabled wd-bg-grey"><i className="fab fa-twitter wd-text-white"/></Link>
                <Link to="/tuiter/home" className="list-group-item list-group-item-action wd-bg-grey" id="home"><i className="fa fa-home wd-text-white"/> <div className="d-none d-xl-inline-block wd-text-white">Home</div></Link>
                <Link to="/tuiter/explore" className="list-group-item list-group-item-action wd-bg-grey" id="explore"><i className="fa fa-hashtag wd-text-white"/> <div className="d-none d-xl-inline-block wd-text-white">Explore</div></Link>
                <Link to="/" className="list-group-item list-group-item-action wd-bg-grey wd-sb-action"><i className="fa fa-bell wd-text-white" /> <div className="d-none d-xl-inline-block wd-text-white">Notifications</div></Link>
                <Link to="/" className="list-group-item list-group-item-action wd-bg-grey wd-sb-action"><i className="fa fa-envelope wd-text-white"/> <div className="d-none d-xl-inline-block wd-text-white">Message</div></Link>
                <Link to="/" className="list-group-item list-group-item-action wd-bg-grey wd-sb-action"><i className="fa fa-bookmark wd-text-white"/> <div className="d-none d-xl-inline-block wd-text-white">Bookmarks</div></Link>
                <Link to="/" className="list-group-item list-group-item-action wd-bg-grey wd-sb-action"><i className="fa fa-list wd-text-white"/> <div className="d-none d-xl-inline-block wd-text-white">Lists</div></Link>
                <Link to="/" className="list-group-item list-group-item-action wd-bg-grey wd-sb-action"><i className="fa fa-user wd-text-white"/> <div className="d-none d-xl-inline-block wd-text-white">Profile</div></Link>
                <Link to="/" className="list-group-item list-group-item-action wd-bg-grey wd-sb-action"><i className="fa fa-caret-square-right wd-text-white"/> <div className="d-none d-xl-inline-block wd-text-white">More</div></Link>
            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html" className="btn btn-primary btn-block rounded-pill">Tweet</a>
            </div>
            <script>
                {`$(function() {
                    var url = window.location.href;
                    var token = url.split('/');
                    var index = token[token.length-1].split('.');
                    var name = {"#"} + index[0];
                    $(".list-group .list-group-item").removeclassName("active");
                    $(name).addclassName("active");
                    $('.wd-sb-action').click(function () {
                       $('#home').removeclassName("active");
                       $('#explore').removeclassName("active");
                    });
                })`}
            </script>
        </div>
    );
}
export default NavigationSidebar;