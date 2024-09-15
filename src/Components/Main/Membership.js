import React from 'react';
//Importing Button1 component 
import Button from './Button1';
const Membership = () => {
    return (
        <div className="Membership" style={{backgroundColor:"rgba(248, 215, 220, 0.504)", color:"black", border:"2px solid black"}}>
            <h2>Membership</h2>
            <h3>2025 Membership<br></br>
            Register your interest <br></br>
            Newcastle Nighthawks <br></br>
            2025 Membership: <br></br>
            </h3>
            <Button/>

        </div>
    );
};

export default Membership;