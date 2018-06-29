import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from "../actions/postActions";

class Form extends Component {
    state = {
        title: '',
        body: ''
    };
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    
    handleSubmit = (e) => {
        e.preventDefault();
        
        const post = {
            title: this.state.title,
            body: this.state.body
        };
        
        this.props.createPost(post);
    };
    
    render() {
        return (
            <form className="ui form" onSubmit={this.handleSubmit}>
                <h1>Add Post</h1>
                <div className="ui container">
                    <div className="field">
                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" name="title" onChange={this.handleChange} value={this.state.title}/>
                    </div>
                    <div className="field">
                        <label htmlFor="body">Body:</label>
                        <textarea id="body" name="body" onChange={this.handleChange}  value={this.state.body}/>
                    </div>
                    <div>
                        <button type="submit" className="ui button" role="button">Submit</button>
                    </div>
                </div>
            </form>
        );
    }
}

Form.propTypes = {
    createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(Form);