import React from 'react'

const handleClick = () => {
    alert ("Thank you for your interest in becoming a Member, we have sent an email to you with a membership form")

}
    
const Button1 = () => {
    return (
        <button className="Button1" type="button" onClick={handleClick}>
            Register Here

        </button>
    )

    
}
export default Button1;
