const HomeItem = (first) => {
    return(`
        <div class="row">
            <div class="col-1">
                <img src=${first.avatar} class="rounded-circle" width="40px" height="40px">
            </div>
            <div class="col-11">
                <b class="wd-content-white">${first.name} <i class="fa fa-check-circle"></i></b><text style="color: rgb(110, 118, 125)">  @${first.userName} &middot; ${first.time}</text>
                </br>
                <text>${first.title}</text>
                <div class="container border border-secondary rounded-3" style="padding: 0px">
                    <div class="row">
                        <img src=${first.img} width="100%" height="100%" style="border-top-left-radius: 12px; border-top-right-radius: 12px">
                    </div>
                   ${first.subtitle.length == 0 ? '' : `                    <div class="row ms-2 mt-2" id="wd-subcontent">\n                        <b>${first.subtitle}</b> <br>\n                        <text style="color: rgb(110, 118, 125)">${first.content}</text>\n                        <a href=${first.href} style="color: rgb(110, 118, 125); text-decoration: none;">  <i class="fa fa-link"></i>${first.website}</a>\n                    </div>`}
                </div>
                <div class="container mt-1 mb-1">
                    <text style="color: rgb(110, 118, 125);"><i class="fa fa-comment"></i>&nbsp;${first.comment}&emsp;&emsp;&emsp;&emsp;<i class="fa fa-retweet"></i>&nbsp;${first.retweet}&emsp;&emsp;&emsp;&emsp;<i class="fa fa-heart" style="color:red;"></i>&nbsp;${first.heart}&emsp;&emsp;&emsp;&emsp;<i class="fa fa-share"></I></text>
                </div>
            </div>
        </div>
        <hr>
`);
}
export default HomeItem;