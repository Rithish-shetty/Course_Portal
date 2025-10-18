import React from "react";
import Header from "../../component/header/header";
import Navigation from "../../component/navigation/navigation";

export default function Contact() {
    return (
        <div> 
            <Header to="/admin" buttonName = {"Admin Panel"} />
            <Navigation />
        </div>
    );
}
