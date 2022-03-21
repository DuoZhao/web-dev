import './../css/index.css';

const PostSummarypost = (
    {
         post = {
             "topic": "Web Development",
             "userName": "ReactJS",
             "time": "2h",
             "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
             "image": "../../../images/react-blue.png"
         }
    }
) => {
    return (
        <div className="row border border-secondary wd-bg-grey">
            <div className="col-9">
                <div style={{color: `rgb(110, 118, 125)`}}>{post.topic}</div>
                <b className="wd-content" style={{color: 'white'}}>{post.userName} </b><i className="fa fa-check-circle" style={{color: 'white'}}/><text style={{color: `rgb(110, 118, 125)`}}> - {post.time}</text><br/>
                <b className="wd-content" style={{color: 'white'}}>{post.title}</b>
            </div>
            <div className="col-3 mt-2">
                <img src={post.image} width="90px" height="80px" style={{borderRadius: '5px'}} alt={""}/>
            </div>
        </div>
);
}
export default PostSummarypost;