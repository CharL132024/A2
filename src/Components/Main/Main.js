// Main.js
import React from "react";
import Welcome from "./Welcome"
import Team from "./Team";
import Fixtures from "./Fixtures";
import Membership from "./Membership";
import Tickets from "./Tickets";
import News from "./News";
import ContactUs from "./Contactus";

function Main() {
    
    return (
        <div className="MainSection" style={{width: "80%", float: "left"}}>
            <Welcome />
            <Team />
            <Fixtures/>
            <Membership/>
            <Tickets/>
            <News/>
            <ContactUs/>
        </div>
    );
}

export default Main;