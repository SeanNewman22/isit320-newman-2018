import React, {Component} from 'react';

import './App.css';

class CreateAssociate extends Component {
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
    
    createStandard = () => {
        const that = this;
        fetch('/create-standard')
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
    
    createEducate = () => {
        const that = this;
        fetch('/create-educate')
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
    
    associateElasticIp = () => {
        const that = this;
        fetch('/associate-elastic-ip')
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

                <button onClick={this.createStandard}>Create with AWS Standard Account</button>
                <button onClick={this.createEducate}>Create with AWS Educate Account</button>
                <button onClick={this.associateElasticIp}>Associate Elastic Ip</button>
                <hr/>
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

export default CreateAssociate;
