import { useState } from 'react';
import Context_Page from './Context_Page';
import '../notContext_Template/context.css';

export default function Practice_useContext(){
    const [isDark, setIsDark] = useState(false);
    return(
        <Context_Page isDark={isDark} setIsDark={setIsDark}></Context_Page>
    )
}