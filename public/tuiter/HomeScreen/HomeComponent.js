import first from "./first.js";

const HomeComponent = () => {
    return(`
        <div class="row">
            <div class="col-1">
                <img src=${first[0].avatar} class="rounded-circle" width="40px" height="40px">
            </div>
            <div class="col-11">
                <b class="wd-content-white">${first[0].name} <i class="fa fa-check-circle"></i></b><text style="color: rgb(110, 118, 125)">  @${first[0].userName} &middot; ${first[0].time}</text>
                </br>
                <text>Amazing show about <span style="color: dodgerblue">@Allen</span> mission!</text>
                <div class="container border border-secondary rounded-3" style="padding: 0px">
                    <div class="row">
                        <img src="../bear.jpeg" width="100%" height="100%" style="border-top-left-radius: 12px; border-top-right-radius: 12px">
                    </div>
                    <div class="row ms-2 mt-2">
                        <b >What is Salesforce?</b> <br>
                        <text style="color: rgb(110, 118, 125)">Salesforce is a cloud-based Customer Relationship Management (CRM) software for managing customer relationships and integration with other systems. This SaaS tool helps to create custom solutions for marketing, sales, services and ecommerce as per business requirements. Salesforce has now expanded from just CRM to offer multiple products.</text>
                        <a href="https://salesforce.wd1.myworkdayjobs.com/en-US/External_Career_Site" style="color: rgb(110, 118, 125); text-decoration: none;">  <i class="fa fa-link"></i>salesforce.com</a>
                    </div>
                </div>
                <div class="container mt-1 mb-1">
                    <text style="color: rgb(110, 118, 125);"><i class="fa fa-comment"></i>&nbsp;4.2K&emsp;&emsp;&emsp;&emsp;<i class="fa fa-retweet"></i>&nbsp;3.5K&emsp;&emsp;&emsp;&emsp;<i class="fa fa-heart" style="color:red;"></i>&nbsp;37.5K&emsp;&emsp;&emsp;&emsp;<i class="fa fa-share"></I></text>
                </div>
            </div>
        </div>
        <hr>
        <div class="row" xmlns="http://www.w3.org/1999/html">
            <div class="col-1">
                <img src=${first[1].avatar} class="rounded-circle" width="40px" height="40px">
            </div>
            <div class="col-11">
                <b class="wd-content-white">${first[1].name} <i class="fa fa-check-circle"></i></b><text style="color: rgb(110, 118, 125)">  @${first[1].userName} &middot; ${first[1].time}</text> 
                </br>
                <text>What a wonderful day!<span style="color: dodgerblue">trib.al/nxEe3eD</span></text>
                <div class="container border border-secondary rounded-3" style="padding: 0px">
                    <div class="row">
                        <img src="../dog.jpeg" width="100%" height="100%" style="border-top-left-radius: 12px; border-top-right-radius: 12px">
                    </div>
                </div>
                <div class="container mt-1 mb-1">
                    <text style="color: rgb(110, 118, 125);"><i class="fa fa-comment"></i>&nbsp;965&emsp;&emsp;&emsp;&emsp;<i class="fa fa-retweet"></i>&nbsp;2.4K&emsp;&emsp;&emsp;&emsp;<i class="fa fa-heart" style="color:red;"></i>&nbsp;4K&emsp;&emsp;&emsp;&emsp;<i class="fa fa-share"></I></text>
                </div>
            </div>
        </div>

        <hr>
    `);
}
export default HomeComponent;
