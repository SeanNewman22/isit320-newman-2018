import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allData: "unknown"
        };
    }


    runCpuInfo = () => {
        const that = this;
        fetch('ssh-runner/call-cpu-info')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                console.log('JSON allData from server:', json.allData);
                that.setState({allData: json.allData});
            })
            .catch(function (ex) {
                console.log('parsing failed, error on server, URL bad, network down, or similar');
                console.log(JSON.stringify(ex, null, 4));
            });
    };

    render() {
        return (
            <div className="App">
                <header>
                    <h1>Run SSH</h1>
                    <p className="byline">by Sean Newman</p>
                </header>
                <main>
                    <button onClick={this.runCpuInfo}>runCpuInfo</button>
                    <pre>{this.state.allData}</pre>
                </main>
                <footer>
                    <p>&copy; 2018 Sean Newman</p>
                </footer>
            </div>
        );
    }
}

export default App;
