import React from "react";
import {render} from '@testing-library/react'
import Button from "../../button/button"

test ('Тест кнопки', ()=> {
    const component = render(<Button />);
    expect (component).toMatchSnapshot();
});