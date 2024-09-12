import React from "react";

import img1 from '../../Assets/Images/SP1.png'
import img2 from '../../Assets/Images/SP2.png'
import img3 from '../../Assets/Images/SP3.png'

export default function Aside() {
  return (
    <div className="Aside" style={{width:"20%", height:"100%", float: "right", backgroundColor:"rgba(255, 227, 182, 0.545)"}}>
        <h3>Our Partners</h3>
        <img src={img1} alt="P1" style={{width:200}}/>
        <img src={img2} alt="P2" style={{width:200}}/>
        <img src={img3} alt="P3" style={{width:200}}/>

    </div>
  );
} 



