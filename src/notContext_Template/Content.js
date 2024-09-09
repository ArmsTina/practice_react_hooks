export default function Content({isDark}){
    return(
        <div
        className="header"
        style={{
            backgroundColor: isDark ? 'black' : 'white',
            color: isDark ? 'white' : 'black',
        }}>
        <p>홍길동님, 좋은 하루 되세요</p>
        </div>
    )
}