import HelloWorld from "./components/hello-world";
import Labs from "./components/labs/index";
import Tuiter from "./components/tuiter";
import ExploreScreen from "./components/tuiter/ExploreScreen/ExploreScreen";
import HomeScreen from "./components/tuiter/HomeScreen/HomeScreen";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/hello" exact={true} element={<HelloWorld/>}/>
                    <Route path="/labs" exact={true} element={<Labs/>}/>
                    {/*<Route path="/tuiter" exact={true} element={<Tuiter/>}/>*/}
                    <Route path="/tuiter/home" exact={true} element={<HomeScreen/>}/>
                    <Route path="/tuiter/explore" exact={true} element={<ExploreScreen/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

