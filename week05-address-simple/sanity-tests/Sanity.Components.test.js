import React from 'react';
import ReactDOM from 'react-dom';
import App from '../source/App';
import Go from '../source/Go';
import First from '../source/First';

describe('Components Suite', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Go />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<First />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

});
