import { useContext } from 'react';
import { ThemeContext } from "./ThemeContext";
import { UserContext } from './UserContext';

export default function Header(){
    // Retrieve the data stored in ThemeContext through useContext
    // Since isDark is an object, {} is used
    const {isDark} = useContext(ThemeContext);
    const user = useContext(UserContext);
    console.log(user);
    return(
        <header
        className="header"
        style={{
            backgroundColor: isDark ? 'black' : 'lightgray',
            color: isDark ? 'white' : 'black',
        }}>
            <h1>Welcome {user}!</h1>
        </header>
    )
}