import { useState, useEffect } from 'react';
import WindowsFrame from './components/WindowsFrame';

const WindowsManager = (props) => {
    //dropped unit
    const [unit, setUnit] = useState({});
    //frames list
    const [frames, setFrames] = useState(props.frames);

    const UpdateFrames = (data) => {
        let temp = [...frames];
        //console.log(temp,data)
        let removed = temp[data.from].splice(data.id, 1);
        temp[data.to].push(removed[0]);

        setFrames(temp);
        setUnit({});
    }

    return (
        <div>
            {
                frames.map((items, index)=>
                    <WindowsFrame 
                        key={index} 
                        id={index}
                        items={items}
                        UpdateFrames={UpdateFrames} 
                        unit={unit}
                        setUnit={setUnit}
                    />
                )
            }


        </div>
    );
};

export default WindowsManager;