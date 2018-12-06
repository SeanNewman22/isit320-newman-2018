import React, {Component} from 'react';

import './App.css';

import ElfHeader from './ElfHeader';
import createAssociate from './CreateAssociate';

class App extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="App">
                <ElfHeader/>
                <main>
                    <CreateAssociate />
                    <RunLocal />
                </main>
            </div>
        );
    }
}

export default App;
