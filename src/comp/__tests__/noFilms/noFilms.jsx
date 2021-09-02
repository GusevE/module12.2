import React from "react";
import {render} from '@testing-library/react'
import NoFilms from "../../NoFilms/noFilms"

test ('Тест записи', ()=> {
    const component = render(<NoFilms />);
    expect (component).toMatchSnapshot();
});