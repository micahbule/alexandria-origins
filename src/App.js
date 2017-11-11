import React, { Component } from 'react';
import Extra from './Extra/Extra';
import Extra2 from './Extra/Extra2';
import Extra3 from './Extra/Extra3';
import Extra4 from './Extra/Extra4';

class App extends Component {
    constructor(props) {
        super(props);

        this.countClick = this.countClick.bind(this);

        this.state = {
            count: 0
        };
    }

    countClick() {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        var blueStyle = {
            color: 'blue',
            fontSize: '200px'
        };

        console.log('Rendering', this.state.count);

        return [
            <h1 style={blueStyle} id="root1" key="root1">Sup bro!</h1>,
            <Extra key="3" counter={this.state.count} handleClick={this.countClick} />,
            <Extra2 key="4" counter={this.state.count} />,
            <Extra3 key="5" />,
            <Extra4 key="6" />
        ];
    }
}

export default App;