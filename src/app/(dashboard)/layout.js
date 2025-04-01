import React from "react";
// import "./globals.css";
import Home from "./home/page.js";
import EmblaCarousel from "./carousel/page.js";
import NavBar from "../navbar/NavBar.js";
import Footer from "../Footer";

const layout = ({children}) => {

    if (children === undefined) {
    children = <Home />;
    }

    return (
            <body className="layout-body222">
                {children}
            </body>
    )
}

export default layout;