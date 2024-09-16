import { useEffect, useState } from 'react';

export default function Practice_useEffect1(){
    const [count, setCount] = useState(1);
    const [name, setName] = useState('');

    const handleCountUpdate = () => {
        setCount(count + 1);
    }

    const handleInputChange = (e) => {
        setName(e.target.value);
    }

    // A callback function is required in useEffect.
    // The tasks inside useEffect will only run when the values in the dependency array change ([]).
    // If there is no dependency array, useEffect runs on every render. If the array is empty, it runs only on the first render.
    // Regardless of the array, every useEffect runs at least once on the initial render.
    useEffect(() => {
        console.log('No dependency array, always get called');
    })
    useEffect(() => {
        console.log('Only on first render');
    }, [])
    useEffect(() => {
        console.log('Count is changed');
    }, [count])
    useEffect(() => {
        console.log('Name is changed');
    }, [name])
    useEffect(() => {
        console.log('Count or name is changed');
    }, [count, name])

    // onClick and onChange will trigger a re-render, since they change states.
    // When a state is changed, it will cause a re-render.
    return(
        <>
            <h1>You are on useEffect1</h1>
            <h2>Check console log</h2>
            <button onClick={handleCountUpdate}>Update</button>
            <p>Count: {count}</p>
            <input type='text' value={name} onChange={handleInputChange}></input>
            <p>{name}</p>
        </>
    )    
}
