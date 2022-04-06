import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuit} from "../../actions/tuits-actions";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
            tuit: whatsHappening
        });
    }
    const [newTuit, setNewTuit] = useState({tuit: 'New tuit', liked: false, likes: 0});
    return (
    <div className="row ms-5">
        <textarea className="form-control" onChange={(e) => setNewTuit({...newTuit, tuit: e.target.value})}/>
        <button onClick={() => createTuit(dispatch, newTuit)} className="btn btn-primary float-end">Tuit</button>
        {/*<textarea value={whatsHappening}*/}
        {/*        onChange={(event) =>*/}
        {/*            setWhatsHappening(event.target.value)}>*/}
        {/*</textarea>*/}
        {/*<button onClick={tuitClickHandler} className="btn btn-primary">*/}
        {/*    Tuit*/}
        {/*</button>*/}
    </div>
    );
}
export default WhatsHappening;