import PostSummaryItem from "./PostSummaryItem.js";
import post from "./post.js";
const Index = () => {
    return(`
            ${post.map(p => {
        return(PostSummaryItem(p));
    }).join('')
    }
    `);
}
export default Index;