import { useEffect, useState } from 'react';

const Timer = (props) => {
    // The return callback function inside useEffect will be executed when the Timer component is unmounted.
    // timer=setInterval runs only when the Timer is first rendered.
    useEffect(() =>{
        const timer = setInterval(() => {
            console.log('Timer is running...');
        }, 1000);

        return () => {
            clearInterval(timer);
            console.log('Timer has stopped.');
        };
    }, [])

    return(
        <div>
            <span>Starting the timer. Check the console.</span>
        </div>
    )
}

export default function Practice_useEffect2(){
    const [showTimer, setShowTimer] = useState(false);

    const handleToggleTimer = () => {
        setShowTimer(!showTimer);
    }

    return(
        <>
            <h1>You are on useEffect2</h1>
            {/* Timer is rendered when showTimer is true */}
            {showTimer && <Timer/>}
            <button onClick={handleToggleTimer}>Toggle Timer</button>
        </>
    )    
}
