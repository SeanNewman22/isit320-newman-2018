import React, { Component } from 'react';
import './App.css';
import ElfHeader from './ElfHeader';
import RadioLocal from './RadioLocal';

class App extends Component {
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

    runScript = (path, script) => {
        const that = this;
        if (!script) {
            return;
        }
        fetch(path + script)
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
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
                that.setState({allData: info});
            })
            .catch(function (ex) {
                console.log('parsing failed, URL bad, network down, or similar', ex);
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


        return (
            <div className="App">
                <ElfHeader/>
                <main>
                    <RadioLocal />
                    <section>
                        <pre>{this.state.allData}</pre>
                    </section>
                </main>

                <footer>
                    <p>&copy; by Sean Newman</p>
                </footer>
            </div>
        );
    }
}

export default App;

