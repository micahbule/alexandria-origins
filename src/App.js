import React, { Component } from 'react';
import Extra from './Extra/Extra';

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
            <button key="root2" type="button" onClick={() => this.setState({ count: this.state.count + 1 })}>Click me</button>,
            <Extra key="3" count={this.state.count} />
        ];
    }
}

export default App;