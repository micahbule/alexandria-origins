import React, { Component } from 'react';
import axios from 'axios';

class Extra4 extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            people: [],
            name: '',
            age: ''
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/people')
            .then(response => {
                this.setState({ people: response.data });
            });
    }

    handleChange(key, event) {
        this.setState({ [key]: event.target.value });
    }

    handleClick() {
        axios.post('http://localhost:3000/api/people', {
            name: this.state.name,
            age: this.state.age
        }).then(response => {
            this.setState({ people: response.data });
        });
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange.bind(null, 'name')}
                    />
                    <input
                        type="text"
                        value={this.state.age}
                        onChange={this.handleChange.bind(null, 'age')}
                    />
                    <button type="button" onClick={this.handleClick}>Add</button>
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.people.map((person) => {
                            return (
                                <tr>
                                    <td>{person.id}</td>
                                    <td>{person.name}</td>
                                    <td>{person.age}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Extra4;