import React, { Component, PropTypes } from 'react';

class DataContent extends Component {
    render() {
        return (
            <div>
                <span>Id: {this.props.data.id} </span>
                <span>Body : {this.props.data.body}</span>
            </div>
        )
    }
}

export default DataContent;
