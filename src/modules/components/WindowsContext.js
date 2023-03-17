
const WindowsContext = (props) => {
    const click = () => {
        alert(props.pos.object)
    }

    return (
        <div className="WindowsContext" style={{left:props.pos.x, top:props.pos.y}}>
            object: {props.pos.object}:<hr/>
            <div>Buy</div>
            <div>Sell</div>
            <div onClick={click}>Properties</div>

        </div>
    );
};

export default WindowsContext;