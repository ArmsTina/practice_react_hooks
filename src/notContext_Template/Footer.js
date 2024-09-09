export default function Footer({isDark, setIsDark}){
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