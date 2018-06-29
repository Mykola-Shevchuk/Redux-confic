import React, { Component } from 'react';
import { connect } from 'react-redux';

class Main extends Component {
    handleIncrement = () => {
        return this.props.dispatch({type: 'INCREMENT'})    
    };
    
    handleDecrement = () => {
        return this.props.dispatch({type: 'DECREMENT'})    
    };
    
    handleAddToList = () => {
        return this.props.dispatch({type: 'ADD_IN_LIST'})    
    };
    
    render() {
        console.log(this.props);
        return (
            <div>
                <p>
                    Count: {this.props.count}
                </p>
                Export Component Main
                <button onClick={this.handleIncrement}>+</button>
                <button onClick={this.handleDecrement}>-</button>
                <input type="text" className='class'/>
                <button onClick={this.handleAddToList}>Add</button>
                <ul>
                    
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Main);