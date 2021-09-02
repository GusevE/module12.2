import React from "react";
import {render} from '@testing-library/react'
import Header from "../../../component/header/header"

it ('Тест записи', ()=> {
    const component = render(<Header />);
    expect (component).toMatchSnapshot();

});
