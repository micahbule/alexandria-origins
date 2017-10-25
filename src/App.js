import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    render() {
        return [
            <h1 key="root1">Hello World!</h1>,
            <button key="root2" type="button" onClick={() => this.setState({ count: this.state.count + 1 })}>I've been clicked {this.state.count} times</button>
        ];
    }
}

export default App;