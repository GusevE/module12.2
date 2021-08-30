import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Search from "../../search/search";


describe('Search', ()=> {

    it('find Placeholder', ()=> {
        render (<Search/>);
      
        expect(screen.getByPlaceholderText("Quentin Terantino")).toBeInTheDocument();

    });

    it('searchbox', ()=> {
        render (<Search/>);
        expect(screen.getByRole("searchbox")).toBeInTheDocument();
    
    });
});
