import WindowsItem from "./WindowsItem";
import WindowsContext from "./WindowsContext";
import { useState } from "react";

const WindowsFrame = (props) => {

    const [state, setState] = useState({
        show:false, x:0, y:0, object:""
    }); // context menu state

    const ContextHide = () => {
        setState({});
    }


    const DragOver = e => e.preventDefault();

    
    const DragDrop = (e) => {
        const activeElement = document.querySelector(`.WindowsItemSelected`);
        const currentElement = e.target;
        const isMoveable = activeElement !== currentElement;
        if(!isMoveable) return;

        props.setUnit({drop:true, to: props.id})

    }


    return (
        <div className="WindowsFrame" onDrop={DragDrop} onDragOver={DragOver} onClick={ContextHide}>
            {props.id}

            {state.show ? <WindowsContext  pos={state}/> : ""}

            {props.items.map((item, i) => 
                <WindowsItem
                    key={i}
                    id={i}
                    setState={setState} //context menu
                    
                    data={item}
                    unit={props.unit}  // drag item
                    setUnit={props.setUnit} 
                    parent={props.id}
                    UpdateFrames={props.UpdateFrames} 
                />
            )}
        </div>
    );
};

export default WindowsFrame;