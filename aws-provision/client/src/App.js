import React, {Component} from 'react';

import './App.css';

import ElfHeader from './ElfHeader';
import CreateAssociate from './CreateAssociate';
import RunLocal from './RunLocal';
import RunRemote from './RunRemote';
import Tools from './Tools';

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
                    <RunRemote />
                    <Tools />
                </main>
            </div>
        );
    }
}

export default App;
