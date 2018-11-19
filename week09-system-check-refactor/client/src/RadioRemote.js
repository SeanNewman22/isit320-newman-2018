import React, { Component } from 'react';
import './App.css';
import ElfHeader from './ElfHeader';

class RadioRemote extends Component {
    constructor(props) {
        super(props);
        this.dataEndPoints = ['/script-pusher/run-script?script=', '/script-pusher/run-system-tool?script='];
        this.state = {
            allData: '',
            selectedValue: '',
            endPointIndex: 0
        };
    }
    
    runSshUptime = () => {
        const that = this;
        fetch('ssh-runner/run-uptime')
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

    
    
    handleChange = (event) => {
        const selectedValue = event.target.value;
        const endPointIndex = event.target.getAttribute('data-endpoint');
        console.log('HANDLE CHANGE', selectedValue);
        this.setState({
            ...this.state,
            selectedValue: selectedValue,
            endPointIndex: endPointIndex
        });
    
    };
    
    handleSubmit = (event) => {
        this.setState({allData: ''});
        console.log('A name was submitted: ', this.state);
        if(this.state.selectedValue === 'uptime2'){
            console.log('Going to ssh');
            this.runSshUptime();
            event.preventDefault();
        } else{
        this.runScript(this.dataEndPoints[this.state.endPointIndex], this.state.selectedValue);
        event.preventDefault();
        }
    };


    render() {
        const radioWeb = (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <div className="elf-form-field">
                            <legend>Remote Services</legend>
                            
                            <input
                                type="radio"
                                name="app-choice"
                                data-endpoint="1"
                                value="uptime2"
                                id="elf-radio-uptime2"
                                onChange={this.handleChange}
                            />
                            <label htmlFor="elf-radio-uptime2">
                                Uptime
                            </label>
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                                Run System Script
                            </button>
                        </div>
                    </fieldset>
                </form>
            </div>
        );


            return (
                <div className="App">
                    <main>
                        <section>
                            {radioWeb}
                        </section>
                        <section>
                            <pre>{this.state.allData}</pre>
                        </section>
                    </main>
                </div>
            );
        }
    }


export default RadioLocal;

