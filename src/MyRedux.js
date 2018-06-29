import React, { Component } from 'react';

export default class MyRed extends Component {
    render() {
        const actionIncrement = {
            type: 'INCREMENT',
            amount: 5
        };

        const decrementAction = { 
            type: 'DECREMENT', 
            amount: 11,
        };

        function reducer(state, action) {
            switch (action.type) {
                case 'INCREMENT':
                    return state + action.amount;
                case 'DECREMENT':
                    return state - action.amount;
                default:
                    return state;
            }
        }

        console.log(reducer(1, actionIncrement));
        console.log(reducer(15, decrementAction));

       return (
           <h1>
               Hello
           </h1>
       );
    }
}