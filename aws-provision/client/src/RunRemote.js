import React, {Component} from 'react';

import './App.css';

class RunRemote extends Component {
    constructor() {
        super();
        this.state = {
            result: 'failure',
            route: '?'
        };
    }
    
    runGetStarted = () => {
        const that = this;
        fetch('/run-get-started')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                //that.setState(foo => (json));
            })
            .catch(function(ex) {
                console.log('parsing failed, URL bad, network down, or similar', ex);
            });
    };
    
    runUbuntuSetup = () => {
        const that = this;
        fetch('/run-ubuntu-setup')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                //that.setState(foo => (json));
            })
            .catch(function(ex) {
                console.log('parsing failed, URL bad, network down, or similar', ex);
            });
    };

    render() {
        return (
            <div className="App">
            
                <button onClick={this.runGetStarted}>Run the GetStarted Script on EC2</button>
                <button onClick={this.runUbuntuSetup}>Run the RunUbuntuSetup Script on EC2</button>
                <section>
                    <pre>{this.state.result}</pre>
                    <pre>{this.state.route}</pre>
                </section>
                <button onClick={this.createEducate}>Remove from KnownHost</button>
            </div>
        );
    }
}

export default RunRemote;