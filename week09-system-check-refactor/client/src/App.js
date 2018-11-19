import React, { Component } from 'react';
import './App.css';
import ElfHeader from './ElfHeader';
import RadioLocal from './RadioLocal';
import RadioRemote from './RadioRemote';

class App extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {


        return (
            <div className="App">
                <ElfHeader/>
                <main>
                    <RadioLocal />
                    <RadioRemote />
                </main>

                <footer>
                    <p>&copy; by Sean Newman</p>
                </footer>
            </div>
        );
    }
}

export default App;

