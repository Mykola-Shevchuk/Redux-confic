import React, {Component} from 'react';
import {connect} from 'react-redux';

class Main_1 extends Component {
    handleAddTrack = () => {
        this.addTrack();
    };

    addTrack = () => {
        this.props.dispatch({
            type: 'ADD_IN_LIST',
            payload: this.currentInputValue.value
        });

        this.currentInputValue.value = '';
    };

    render() {
        console.log(this.props);
        const playList = this.props.playList.map((track, index) =>
            <li key={index}>{track}</li>
        );
        return (
            <div>
                <input type="text" ref={input => this.currentInputValue = input} />
                <button onClick={this.handleAddTrack}>Add Track</button>
                <ul>
                    {playList}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        playList: state
    }
};

export default connect(mapStateToProps)(Main_1);