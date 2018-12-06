import React, {Component} from 'react';

import './App.css';

class Tools extends Component {
    constructor() {
        super();
        this.state = {
            result: 'failure',
            route: '?',
            instanceData: '?',
            allocationIds: '?',
            regions: '?'
        };
    }
    
    getInstanceStatus = () => {
        const that = this;
        fetch('/get-instance-status')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState({ 
                    result: json.result,
                    route: json.route,
                    instanceData: json.instanceData,
                    allocationIds: json.allocationIds,
                    regions: json.regions });
                //that.setState(foo => (json));
            })
            .catch(function(ex) {
                console.log('parsing failed, URL bad, network down, or similar', ex);
            });
    };
    
    rebootInstance = () => {
        const that = this;
        fetch('/reboot-instance')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState({ 
                    result: json.result,
                    route: json.route,
                    instanceData: json.instanceData,
                    allocationIds: json.allocationIds,
                    regions: json.regions });
                //that.setState(foo => (json));
            })
            .catch(function(ex) {
                console.log('parsing failed, URL bad, network down, or similar', ex);
            });
    };
    
    removeKnownHosts = () => {
        const that = this;
        fetch('/script-pusher/remove-known-host')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState({ 
                    result: json.result,
                    route: json.route,
                    instanceData: json.instanceData,
                    allocationIds: json.allocationIds,
                    regions: json.regions });
                //that.setState(foo => (json));
            })
            .catch(function(ex) {
                console.log('parsing failed, URL bad, network down, or similar', ex);
            });
    };

    render() {
        return (
            <div className="App">
            
                <button onClick={this.removeKnownHosts}>Remove from KnownHost</button>
                <button onClick={this.getInstanceStatus}>Get Instance Status</button>
                <button onClick={this.rebootInstance}>Reboot Instance</button>
                <section>
                    <pre>{this.state.result}</pre>
                    <pre>{this.state.route}</pre>
                    <pre>{this.state.instanceData}</pre>
                    <pre>{this.state.allocationIds}</pre>
                    <pre>{this.state.regions}</pre>
                </section>
            </div>
        );
    }
}

export default Tools;