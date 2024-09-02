import { useEffect, useRef } from 'react';

export default function Practice_useRef2() {
    // useRef can also be used to easily access DOM elements.
    const inputRef = useRef();

    // Using ${variable} with backticks (`) to easily concatenate strings and variables.
    const handleFocus = () => {
        alert(`Welcome, ${inputRef.current.value}`);
        inputRef.current.focus();
    }

    // Automatically focuses on the input field when the component first renders.
    useEffect(() => {
        inputRef.current.focus();
    }, [])

    return (
        <>
            <input 
                type="text" 
                ref={inputRef} 
                placeholder="username" 
            /> {/* inputRef now points to this input element */}
            <button onClick={handleFocus}>Login</button>
        </>
    );
}
