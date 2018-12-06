import React, {Component} from 'react';

import './App.css';

class RunLocal extends Component {
    constructor() {
        super();
        this.state = {
            result: 'failure',
            route: '?'
        };
    }
    
    copyGetStarted = () => {
        const that = this;
        fetch('/copy-get-started')
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
            
                <button onClick={this.copyGetStarted}>Copy the GetStarted Script</button>
                <section>
                    <pre>{this.state.result}</pre>
                    <pre>{this.state.route}</pre>
                </section>
                <button onClick={this.createEducate}>Run the GetStarted Script</button>
                <button onClick={this.createEducate}>Remove from KnownHost</button>
            </div>
        );
    }
}

export default RunLocal;