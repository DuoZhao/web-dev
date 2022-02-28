import first from "./first.js";
import HomeItem from "./HomeItem.js";

const HomeComponent = () => {
    return (`
            ${first.map(f => {
        return (HomeItem(f));
    }).join('')
    }
    `);
}
export default HomeComponent;
