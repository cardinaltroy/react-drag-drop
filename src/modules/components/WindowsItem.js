
const WindowsItem = (props) => {

    const ContextShow = (e) => {
        e.preventDefault();
        props.setState({
            show: true,
            x: e.clientX,
            y: e.clientY,
            object: props.id
        });
    }

    const DragStart = (e) => {
        e.target.classList.add(`WindowsItemSelected`);
    }

    const DragEnd = (e) => {
        e.target.classList.remove(`WindowsItemSelected`);
        if(!props.unit.drop) return;

        props.UpdateFrames({
            drop: props.unit.drop,
            id: props.id,
            from: props.parent,
            to: props.unit.to
        })

        
        
    }


    return (
        <div draggable="true" className="WindowsItem" onDragStart={DragStart} onDragEnd={DragEnd} onContextMenu={ContextShow}>
            {props.data.name}<br/>
            Object id: {props.id}<br/>
            Count: {props.data.count}
        </div>
    );
};

export default WindowsItem;