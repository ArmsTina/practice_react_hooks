import { useState, useRef, useEffect } from 'react';

export default function Practice_useRef1() {
    // When state changes, it triggers a re-render, which resets local variables.
    // useRef does not trigger re-renders when its value changes, and its value persists across renders.
    // Therefore, useRef can be used as a storage space that doesn't affect rendering.
    // If a variable changes frequently but doesn't need to trigger a re-render, use useRef to avoid performance issues.
    // Use useRef when you need to track changes without triggering a re-render.

    let countVar = 0; // Local variables are reset on each render.
    const [count, setCount] = useState(0);
    const countRef = useRef(0); // Initializes with a `current` property set to 0.
    const countRender = useRef(0); // Keeps track of render count.

    // Example usage of useRef: Counting renders
    useEffect(() => {
        countRender.current += 1;
        console.log('Render Times:', countRender.current);
    });

    console.log('Rendering... Var:', countVar); // Local variable resets on each render, always logging 0.
    console.log('Rendering... State:', count);
    console.log('Rendering... Ref:', countRef.current); // Logs the current value of countRef.

    const increaseCountVar = () => {
        countVar += 1;
        console.log('Var:', countVar);
    };

    const increaseCountState = () => {
        setCount(count + 1);
    };

    const increaseCountRef = () => {
        countRef.current += 1;
        console.log('Ref:', countRef.current); // Value changes but doesn't trigger a re-render.
    };

    return (
        <>
            <p>Var: {countVar}</p>
            <button onClick={increaseCountVar}>Increase Var</button>

            <p>State: {count}</p>
            <button onClick={increaseCountState}>Increase State</button>

            {/* countRef increases, but since it doesn't trigger a re-render, the UI won't reflect the change immediately. */}
            <p>Ref: {countRef.current}</p>
            <button onClick={increaseCountRef}>Increase Ref</button>
        </>
    );
}