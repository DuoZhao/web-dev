import PostSummaryItem from "./PostSummaryItem.js";
import post from "./posts.json";

const Index = () => {
    return (
        <div>
        {
            post.map(post => {
                return(
                    <PostSummaryItem post={post}/>
                );
            })
        }
        </div>
    );
}
export default Index;