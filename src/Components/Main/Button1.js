import React from 'react'
//Setting desired alert pop-up
const handleClick = () => {
    alert ("Thank you for your interest in becoming a Member, we have sent an email to you with a membership form")

}   
//Inserting Button1 and attaching the desired alert pop-up to occur when the button is clicked 
//Using inline css to centre and style the button
const Button1 = () => {
    return (
        <button className="Button1" type="button" onClick={handleClick} style={
            {color:"black",
             backgroundColor:"lightgrey", 
             margin:"auto",
             display: "flex", 
            justifyContent: "center",  
            alignItems: "center"}}>
            Register Here

        </button>
    ) 
}
export default Button1;