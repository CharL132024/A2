import React from 'react';
import { render } from '@testing-library/react';
import Button2 from '../Components/Main/Button2'
const { getByText } = render (<Button2>Send</Button2>)

it ('shows the button with the right text', () => {
    getByText('Send');
});

