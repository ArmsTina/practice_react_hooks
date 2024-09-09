import { useContext } from 'react';
import { ThemeContext } from "./ThemeContext";

export default function Footer(){
    const {isDark, setIsDark} = useContext(ThemeContext);
    return(
        <footer
        className="footer"
        style={{
            backgroundColor: isDark ? 'black' : 'lightgray',
        }}>
            <button className="button" onClick={() => setIsDark(!isDark)}>Dark Mode</button>
        </footer>
    )
}