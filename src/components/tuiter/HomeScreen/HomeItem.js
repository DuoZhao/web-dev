import "./../css/index.css"

const HomeItem = (
    {
        first = {
            "avatar": "../duck.jpeg",
            "name": "Duke Zhao",
            "userName": "Duke",
            "time": "23h",
            "title": "Amazing show about @Allen mission!",
            "image": "../bear.jpeg",
            "subtitle": "What is Salesforce?",
            "content": "Salesforce is a cloud-based Customer Relationship Management (CRM) software for managing customer relationships and integration with other systems. This SaaS tool helps to create custom solutions for marketing, sales, services and ecommerce as per business requirements. Salesforce has now expanded from just CRM to offer multiple products.",
            "href": "https://salesforce.wd1.myworkdayjobs.com/en-US/External_Career_Site",
            "website": "salesforce.com",
            "comment": "4.2K",
            "retweet": "3.5K",
            "heart": "37.5K",
            "containTitle": true
        }
    }
) => {
    const element = <div className="row ms-2 mt-2" id="wd-subcontent">
                        <b className="wd-text-white">{first.subtitle}</b><br/>
                        <text style={{color: `rgb(110, 118, 125)`}}>{first.content}</text>
                        <a href={first.href} style={{color: `rgb(110, 118, 125)`, textDecoration: 'none'}}> <i className="fa fa-link"/>{first.website}</a>
                    </div>
    return(
        <div>
            <div className="row">
                <div className="col-1">
                    <img src={first.avatar} className="rounded-circle" width="40px" height="40px" alt={""}/>
                </div>
                <div className="col-11">
                    <b className="wd-text-white">{first.name} <i className="fa fa-check-circle"/></b><text style={{color: `rgb(110, 118, 125)`}}>  @{first.userName} &middot; {first.time}</text>
                    <br/>
                    <text className="wd-text-white">{first.title}</text>
                    <div className="container border border-secondary rounded-3" style={{padding: '0px'}}>
                        <div className="row">
                            <img src={first.image} width="100%" height="100%" style={{borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}} alt={""}/>
                        </div>
                        {!first.containTitle ? '' : element}
                    </div>
                    <div className="container mt-1 mb-1">
                        <text style={{color: `rgb(110, 118, 125)`}}><i className="fa fa-comment"/>&nbsp;{first.comment}&emsp;&emsp;&emsp;&emsp;<i className="fa fa-retweet"/>&nbsp;{first.retweet}&emsp;&emsp;&emsp;&emsp;<i className="fa fa-heart" style={{color:'red'}}/>&nbsp;{first.heart}&emsp;&emsp;&emsp;&emsp;<i className="fa fa-share"/></text>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
);
}
export default HomeItem;