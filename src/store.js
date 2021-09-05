import { createStore } from 'redux';

const initialState = {
    value: '',
    type: 'title',
    Data: [],
    sort: 'release date'
    
}

const reducer = (state = initialState, action) => {
    switch(action.type)
    {
        case 'CHANGE_TYPE': return { ...state, type: action.payload }
        case 'CHANGE_VALUE': return { ...state, value: action.payload }
        case 'SEARCH_FILM': return { ...state, Data: [ ...action.payload ] }
        case 'SORT': return { ...state, sort: action.payload }
        
        default: return state;
    }
}

const store = createStore(reducer);

export default store;