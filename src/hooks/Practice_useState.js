import {useState} from 'react';

export default function Practice_useState(){
    // 1.useState
    // when there is an update, it will re-render the component
    const [time, setTime] = useState(5);

    const timeIncrease = () => {
        // When trying to change the state, it is better to set a new value
        let newTime = time;
        newTime === 23 ? setTime(0) : setTime(newTime+1);
    }

    // If you want to get an initial value from outside
    const testWork = () => {
        console.log('This is a heavy work');
        return ['Kim', 'Yang'];
    }
    // Don't call right away - It will call testWork every render
    // Instead, use Callback function. () => { return functionName(); }
    const [names, setNames] = useState(()=>{ return testWork(); });
    const [input, setInput] = useState('');

    const saveInput = (e) => {
        setInput(e.target.value);
    }

    const saveName = () => {
        // The callback receives the current state (prevState) and returns the new state to be set by setNames
        setNames((prevState) => {
            return [...prevState, input];
        });
        setInput('');
    }

    return(
        <>
            <h1>You are on useState.</h1>
            <span>Current Time: {time}:00 </span>
            <button onClick={timeIncrease}>Update Time</button>
            <p></p>
            <input type="text" value={input} onChange={saveInput}/>
            <button onClick={saveName}>Upload</button>

            {/* Iterate while names has value */}
            {/* arr.map(function(element, index, whole_array){  }); */}
            {/* A key is necessary when using arr.map() */}
            {names.map((name, index) => {
                return <p key={index}>{name}</p>
            })}
        </>
    )
}