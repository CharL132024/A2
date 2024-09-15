//Testing carousel functionality 
import React from 'react'
import { render } from '@testing-library/react'
import Carousel from '../Components/Main/Carousel'
import img1 from '../Assets/Images/NBimg1.jpeg'
import img2 from '../Assets/Images/NBimg2.jpeg'
import img3 from '../Assets/Images/NBimg3.jpeg'
//Check the images are shown as they should be
test('should render images', () => {
    const images = [img1, img2, img3];
    const {getByTest} = render (<Carousel images={images} role='img'/>);
    expect(img1).toBeInTheDocument;
    expect(img2).toBeInTheDocument;
    expect(img3).toBeInTheDocument;


});
