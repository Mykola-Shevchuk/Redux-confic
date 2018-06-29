import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from "../actions/postActions";

class Post extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }
    
    componentWillReceiveProps(nexProps) {
        if (nexProps.newPost) {
            this.props.posts.unshift(nexProps.newPost);
        }
    }
    
    render() {
        console.log(this.props);
        const posts = this.props.posts.map(post => (
            <div key={post.id} className="ui container">
                <h3>Title: {post.title}</h3>
                <p>{post.body}</p>
                <hr />
                <span>User id: {post.userId}</span>
            </div>
        ));
        
        return (
            <h1>
                {posts}
            </h1>
        );
    }
}

Post.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired, 
  newPost: PropTypes.object.isRequired  
};

const mapStateToProps = (state) => ({
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Post);