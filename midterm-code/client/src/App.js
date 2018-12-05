import React, { Component } from 'react';
import './App.css';
import ElfHeader from './ElfHeader';

class App extends Component {
    constructor(props) {
        super(props);
        this.dataEndPoints = [
            '/script-pusher/run-script?script=',
            '/script-pusher/run-system-tool?script='
        ];
        this.state = {
            allData: '',
            selectedValue: '',
            endPointIndex: 0
        };
    }

    runSshUptime = () => {
        const that = this;
        fetch('ssh-runner/run-uptime')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('JSON allData from server:', json.allData);
                that.setState({ allData: json.allData });
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, error on server, URL bad, network down, or similar'
                );
                console.log(JSON.stringify(ex, null, 4));
            });
    };

    runScript = (path, script) => {
        const that = this;
        if (!script) {
            return;
        }
        fetch(path + script)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('allData', json.allData);
                console.log('result', json.result);
                console.log('code', json.code);
                console.log('error', json.error);
                let info = '';
                if (json.result === 'error') {
                    info = json.error;
                } else if (script === 'CpuInfo') {
                    var regex1 = RegExp('model name.*', 'g');
                    let array1 = regex1.exec(json.allData);
                    while (array1 !== null) {
                        info += array1[0] + '\n';
                        console.log(`Found ${array1[0]}.`);
                        array1 = regex1.exec(json.allData);
                    }
                } else {
                    info = json.allData;
                }
                that.setState({ allData: info });
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };

    handleChange = event => {
        const selectedValue = event.target.value;
        const endPointIndex = event.target.getAttribute('data-endpoint');
        console.log('HANDLE CHANGE', selectedValue);
        this.setState({
            ...this.state,
            selectedValue: selectedValue,
            endPointIndex: endPointIndex
        });
    };

    handleSubmit = event => {
        this.setState({ allData: '' });
        console.log('A name was submitted: ', this.state);
        if (this.state.selectedValue === 'uptime2') {
            console.log('Going to ssh');
            this.runSshUptime();
            event.preventDefault();
        } else {
            this.runScript(
                this.dataEndPoints[this.state.endPointIndex],
                this.state.selectedValue
            );
            event.preventDefault();
        }
    };

    render() {
        const radioWeb = (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <div className="elf-form-field">
                            <legend>Services</legend>
                            <input
                                type="radio"
                                name="app-choice"
                                data-endpoint="0"
                                value="CpuInfo"
                                id="elf-radio-cpu"
                                onChange={this.handleChange}
                            />
                            <label htmlFor="elf-radio-cpu">CpuInfo</label>

                            <input
                                type="radio"
                                name="app-choice"
                                data-endpoint="0"
                                value="VersionCheck"
                                id="elf-radio-version"
                                onChange={this.handleChange}
                            />
                            <label htmlFor="elf-radio-version">
                                Version Info
                            </label>

                            <input
                                type="radio"
                                name="app-choice"
                                data-endpoint="1"
                                value="uptime"
                                id="elf-radio-uptime"
                                onChange={this.handleChange}
                            />
                            <label htmlFor="elf-radio-uptime">Uptime</label>
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                                Run System Script
                            </button>
                        </div>
                    </fieldset>

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
                            <label htmlFor="elf-radio-uptime2">Uptime</label>
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
                <ElfHeader />
                <main>
                    <section>{radioWeb}</section>
                    <section>
                        <pre>{this.state.allData}</pre>
                    </section>
                    <button onClick={this.runFoo}>Run Foo</button>
                </main>

                <footer>
                    <p>&copy; by Sean Newman</p>
                </footer>
            </div>
        );
    }
}

export default App;