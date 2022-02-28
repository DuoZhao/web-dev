const PostSummaryItem = (item) => {
    return(`
        <div class="row border border-secondary" style="background-color: #222222">
            <div class="col-9">
                <div style="color: rgb(110, 118, 125);">${item.topic}</div>
                <b class="wd-content">${item.userName} </b><i class="fa fa-check-circle"></i><text style="color: rgb(110,118,125);"> - ${item.time}</text></br>
                <b class="wd-content">${item.title}</b>
            </div>
            <div class="col-3 mt-2">
                <img src=${item.image} width="90px" height="80px" style="border-radius: 5px">
            </div>
        </div>
`);
}
export default PostSummaryItem;