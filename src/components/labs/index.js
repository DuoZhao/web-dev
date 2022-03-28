import React from "react";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo/index";
import {Link} from "react-router-dom";
import ReduxExamples from "./redux-examples";

const Labs = () => {
    return(
        <div>
            <h1>Labs</h1>
            <Link to="/">
                home
            </Link> |
            <Link to="/tuiter">
                Tuiter
            </Link>
            {/*<ConditionalOutput/>*/}
            {/*<Styles/>*/}
            {/*<Classes/>*/}
            {/*<TodoList/>*/}
            <ReduxExamples/>
        </div>
    )
};


export default Labs;
