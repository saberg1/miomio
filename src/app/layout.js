import React from "react";
import NavBar from "./navbar/NavBar";
// import Home from "./(dashboard)/home/page";
import Footer from "./Footer";
import "./globals.css";


// This is a layout component that wraps around all of our pages.
// It's a good place to put things like headers, footers, and other

const layout = ({children}) => {
  
  return (
    <html lang="en">
      <body className="layout-body-test">
        <NavBar />
          {children}
        <Footer />
      </body>
    </html>
  );
}

export default layout;
