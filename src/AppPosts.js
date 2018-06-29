import React, { Component } from 'react';
import Post from './components/Post';
import Form from "./components/Form";
import store from './store';
import { Provider } from 'react-redux';


class AppPosts extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="ui container">
                    <Form />
                    <Post />
                </div>
            </Provider>
        );
    }
}

export default AppPosts;