import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Text from "../../text/text";

describe ('Text', ()=> {

    it ('render', ()=> {
        const {getByText} = render (<Text />);
        const element = getByText("netflixroulette");
        screen.debug();
        expect(element).toBeInTheDocument
    })
})
