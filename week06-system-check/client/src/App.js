import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allData: 'unknown'
        };
    }


    copyFile = () => {
        const that = this;
        fetch('/script-pusher/copy-file')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json.allData);
                that.setState({allData: json.allData});
            })
            .catch(function(ex) {
                console.log('parsing failed, URL bad, network down, or similar', ex);
            });
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
                            <label htmlFor="elf-radio-version">Version Info</label>

                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Run System Script</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        );

        return (
            <div className="App">
                <header>
                    <h1>Copy File</h1>
                </header>
                <main>
                    <section>
                        {radioWeb}
                    </section>
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

