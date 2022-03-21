import React from "react";
import "./../css/index.css"
import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (
        <div className="container">
            <div className="col-1"/>
            <div className="row">
                <div className="col-11">
                    <div className="input-group wd-input-group">
                        <span style={{position: 'absolute', zIndex: '4', display: 'flex', marginTop: '11px', marginLeft: '12px', height: '25px'}}>
                            <i className="fa fa-search" aria-hidden="true" style={{color: '#50555A'}}/>
                        </span>
                        <input type="text" className="form-control rounded-pill" placeholder="Search Twitter"
                               style={{paddingLeft: '2.375rem' }}/>
                    </div>
                </div>
                <div className="col-1">
                    <a href={"../explore-settings.html"}><i className="fa fa-cog mt-1 fa-2x fa-primary"/></a>
                </div>
            </div>
            <ul className="nav nav-tabs mt-2" style={{borderBottom: 'none'}}>
                <li className="nav-item">
                    <a className="nav-link active" href={""}
                       style={{backgroundColor: '#227fab', color: 'white'}}>For
                        you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={""} style={{ color: '#FFF' }} >Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={""} style={{ color: '#FFF' }}>News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={""} style={{ color: '#FFF' }}>Sports</a>
                </li>
                <li className="nav-item d-none d-lg-inline-block">
                    <a className="nav-link" href={""} style={{ color: '#FFF' }}>Entertainment</a>
                </li>
            </ul>
            <div className="row" id="center-image" style={{position: 'relative', marginTop: '0px'}}>
                <img src={"spacex.jpeg"} style={{paddingLeft: '0px', paddingRight: '0px'}} alt={""}/>
                <b style={{position: 'absolute', color: 'white', bottom: '1px', fontSize: '35px'}}>SpaceX's Starship</b>
            </div>
            <PostSummaryList/>
        </div>
    );
}
export default ExploreComponent;
