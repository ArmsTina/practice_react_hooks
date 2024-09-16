import { useMemo, useState } from 'react';

const hardCalculate = (number) => {
    console.log('Performing a heavy calculation...');
    for (let i = 0; i < 999999999; i++) {}; // Simulating a time-consuming task
    return Number(number) + 10000;
}

// Without useMemo on hardCalculate, this task will cause delays too
const easyCalculate = (number) => {
    console.log('Performing a light calculation...');
    return Number(number) + 1;
}

export default function Practice_useMemo1() {
    // React components are re-initialized on every render, and variables are reset.
    // If a function is used to retrieve a value on every render, it can lead to performance issues.
    // useMemo is used to cache the computed value and prevent unnecessary re-calculations.
    // Basic form of useMemo: useMemo(callback, [dependency array]);
    // It only recalculates if the values in the dependency array change.
    // If the dependency array is empty, the calculation only runs when the component mounts.

    const [hardNumber, setHardNumber] = useState(0);
    // Memoizing the result of hardCalculate so it only recalculates when hardNumber changes.
    const hardSum = useMemo(() => {
        return hardCalculate(hardNumber);
    }, [hardNumber]);

    const [easyNumber, setEasyNumber] = useState(0);
    const easySum = easyCalculate(easyNumber);

    return (
        <>
            <h1>You are on useMemo1</h1>
            <h3>Heavy Calculation</h3>
            <input 
                type="number" 
                value={hardNumber}
                onChange={(e) => setHardNumber(e.target.value)}
            />
            <span> + 10000 = {hardSum}</span>
            
            <h3>Light Calculation</h3>
            <input 
                type="number" 
                value={easyNumber}
                onChange={(e) => setEasyNumber(e.target.value)}
            />
            <span> + 1 = {easySum}</span>
        </>
    );
}
