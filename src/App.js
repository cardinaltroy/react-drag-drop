import './App.css';
import WindowsManager from './modules/WindowsManager';

function App() {
    var lists = [
        [
            { name: "gun", count: 10 },
            { name: "gun", count: 10 },
            { name: "gun", count: 10 }
        ],
        [
            { name: "gun", count: 9 },
            { name: "MODULE", count: 9 },
            { name: "gun", count: 9 }
        ],
        [
            { name: "MODULE", count: 8 },
            { name: "MODULE", count: 8 }
        ]
    ];

    return (
        <div className="App">
            <WindowsManager frames={lists}/>
        </div>
    );
}

export default App;
