import React, { Component } from 'react';

class Message extends Component {

    render() {
        return (
            <div className="message-box">
                <p className="message-info">At {this.props.message.at}</p>
                <p className="message-info">From {this.props.message.from}</p>
                <p className="message">{this.props.message.message}</p>
                <br/>
            </div>
        );
    }
}

export default Message;