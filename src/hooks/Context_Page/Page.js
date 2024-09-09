import Header from './Header'
import Content from "./Content";
import Footer from "./Footer";

export default function Context_Page(){
    return(
        <div className="page">
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
}