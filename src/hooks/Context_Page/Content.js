import { useContext } from 'react';
import { ThemeContext } from "./ThemeContext";
import { UserContext } from './UserContext';

export default function Content(){
    const {isDark} = useContext(ThemeContext);
    const user = useContext(UserContext);
    return(
        <div
        className="header"
        style={{
            backgroundColor: isDark ? 'black' : 'white',
            color: isDark ? 'white' : 'black',
        }}>
        <p>{user}님, 좋은 하루 되세요</p>
        </div>
    )
}