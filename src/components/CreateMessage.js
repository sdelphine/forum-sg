import React, { Component } from 'react';

function randomId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

// TODO when submit, add datetime

class CreateMessage extends Component {
    state = {
        message: '',
        id: '',
        from: '',
        topic: '',
        at: '',
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    routeChange() {
        let path = `/`;
        this.props.history.push(path);
      }
    
    render() {
        return (
            <div>
                <label className="form">
                    <span>From</span>
                    <select name="from" id="from-select">
                        <option value="toto">Toto</option>
                        <option value="titi">Titi</option>
                    </select>
                    <textarea
                        type="text"
                        id="message"
                        name="message"
                        placeholder="Write your message"
                        required
                        value={this.state.message}
                        onChange={this.handleChange}
                    />
                    <button type="submit" onClick={this.routeChange.bind(this)}>Submit</button>
                </label>
            </div>
        );
    }
}

export default CreateMessage;