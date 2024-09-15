import React from 'react';
import './News.css'
import img1 from '../../Assets/Images/newsW.jpeg'
import img2 from '../../Assets/Images/newsWS.jpeg'

const News = () => {
    return (
        <div className="News" style={{backgroundColor:"rgba(248, 215, 220, 0.504)", color:"black", border:"2px solid black"}}>
            <h2>News</h2>
            <img src={img1} alt="Action shot" style={{ width:"80%", height:"auto", display:"block", marginLeft:"auto", 
            marginRight:"auto", border:"2px solid black"}}/>
            <figcaption>Nighthawks dominated last Sunday with a 34-20 victory over the Lightning.</figcaption>
            <h3> The nighthawks had an incredible win over the lightning last weekend; could this be enough to secure a spot in the finals?</h3>
            <img src={img2} alt="Netball Workshop" style={{ width:"80%", height:"auto", display:"block", marginLeft:"auto", 
            marginRight:"auto", border:"2px solid black"}}/>
            <figcaption>Another skills workshop!</figcaption>
            <h3>Our next youth skills workshop is being hosted at North Newcastle high school on the 31st August from 10am-2pm. If you want to meet the team and learn some new skills, come on down! Everyone welcome!</h3>

        </div>
    );
};

export default News;