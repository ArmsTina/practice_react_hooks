import React from "react";
import Header from './Header'
import Content from "./Content";
import Footer from "./Footer";

export default function Context_Page({isDark, setIsDark}){
    return(
        <div className="page">
            <Header isDark={isDark}/>
            <Content isDark={isDark}/>
            <Footer isDark={isDark} setIsDark={setIsDark}/>
        </div>
    )
}