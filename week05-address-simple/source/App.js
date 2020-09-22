import React, {Component} from 'react';
import ElfHeader from './ElfHeader';
import Go from './Go';
import First from './First';
import logo from './images/tree-of-life.png';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Address Simple Home</h1>
                <img src={logo} className="App-logo" alt="logo"/>
            </div>
        );
    }
}

export default App;
