import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Main from './components/Main';
import './App.css';

const initialState = {
    count: 0,
    playList: []
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
            };
        case 'ADD_IN_LIST':
            return {
                playList: state.playList
            };
        default:
            return state;
    }   
};

const store = createStore(counterReducer);

store.subscribe(() => console.log(store.getState()));



class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
            <Main />
        </Provider>
      </div>
    );
  }
}

export default App;
