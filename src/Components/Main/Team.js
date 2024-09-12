import React from "react";
import Carousel from "./Carousel";
import img1 from '../../Assets/Images/NBimg1.jpeg'
import img2 from '../../Assets/Images/NBimg2.jpeg'
import img3 from '../../Assets/Images/NBimg3.jpeg'

function Team() {
    const images = [
        img1,
        img2,
        img3,
    ];
    return (
        <div className="Team">
        <Carousel images = {images}/>
            <h3>Check out the best moments from our most recent game <a href="https://www.youtube.com/watch?v=yZFDr9bkzMM">Here</a></h3>
        </div>
    );
};


export default Team;