import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MessageView from './components/MessageView';
import MessageInput from './components/MessageInput'


const initialState = {
    messages: [
        {
            text: 'Roger. Eagle is undocked',
            timestamp: '1461974250213',
            id: '9da98285-4178',
        }
    ]
};

const store = createStore(reducer, initialState);

class AppChat extends Component {
   
}

export default AppChat;