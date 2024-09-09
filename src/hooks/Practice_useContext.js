import { useState } from 'react';
import Page from './Context_Page/Page';
import '../notContext_Template/context.css';
import { ThemeContext } from './Context_Page/ThemeContext';
import { UserContext } from './Context_Page/UserContext';

export default function Practice_useContext(){
    // Create a state to hold the information to be stored in Context
    const [isDark, setIsDark] = useState(false);
    return(
        <UserContext.Provider value={'User'}>
        {/* All components inside here, including their descendants, can store these value props in ThemeContext 
        and access them using useContext. */}
            <ThemeContext.Provider value={{isDark, setIsDark}}>
                <Page/>
            </ThemeContext.Provider>
        </UserContext.Provider>
    )
}