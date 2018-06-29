import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Main_1 from './components/Main_1';
import './App.css';

const initialState = [
    'Mother Eath',
    'Moi Lolita'
];

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_IN_LIST':
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
};

const store = createStore(counterReducer);

console.log(store.getState());

class App_1 extends Component{
    render() {
        return (
            <Provider store={store}>
                <Main_1 />
            </Provider>
        );
    }
}

export default App_1;