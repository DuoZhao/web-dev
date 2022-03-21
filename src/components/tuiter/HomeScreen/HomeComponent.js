import first from "./first.json";
import HomeItem from "./HomeItem.js";

const HomeComponent = () => {
    return (
        <div>
            {
                first.map(first => {
                    return (
                        <HomeItem first={first}/>
                    );
                })
            }
        </div>
    );
}
export default HomeComponent;
