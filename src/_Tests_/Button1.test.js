//testing Button1 functionality
import React from 'react';
import { render } from '@testing-library/react';
import Button1 from '../Components/Main/Button1'
const { getByText } = render (<Button1>Register Here</Button1>)
//Check the button shows with the correct text 
it ('shows the button with the right text', () => {
    getByText('Register Here');
});
