import React from 'react'

const handleClick = () => {
    alert ("Thank you for your Message, we will get back to you as soon as possible!")

}   
const Button2 = () => {
    return (
        <button className="Button1" type="button" onClick={handleClick}>
            Send

        </button>
    )   
}
export default Button2;