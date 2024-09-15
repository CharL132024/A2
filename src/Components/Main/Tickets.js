import React from 'react';

//This component involves mostly text, with inline css and a hypwerlink
const Tickets = () => {
    return (
        <div className="Tickets" style={{backgroundColor:"rgba(250, 196, 204, 0.504)", color:"black", border:"2px solid black"}}>
            <h2>Tickets</h2>
            <h3> Tickets for our 2024 home games are now available via Ticketmaster. View our full fixture <a href="Newcastle Nighthawks 2024 Fixture_.pdf">HERE</a></h3>
            <br/>
            <h3> Members are able to select the games they would like to attend from Wednesday 6 March. Please note the club has placed a large number of tickets on hold for members which will be ready for selection from this date.</h3>
            <br/>
            <h3>2024 Members will be able to purchase additional tickets at a discounted rate, using their 20% off member discount code.</h3>
            <br/>
            <h3>Members with questions can email membership@newynighthawks.com.au and your enquiry will be responded to as quickly as possible</h3>
    
        </div>
    );
};



export default Tickets;