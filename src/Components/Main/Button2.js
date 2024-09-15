import React from 'react'
//Setting the alert pop-up 
const handleClick = () => {
    alert ("Thank you for your Message, we will get back to you as soon as possible!")

}   
//Creating Button2 and attaching the pop-up specified above 
const Button2 = () => {
    return (
        <button className="Button2" type="button" onClick={handleClick}>
            Send

        </button>
    )   
}
export default Button2;