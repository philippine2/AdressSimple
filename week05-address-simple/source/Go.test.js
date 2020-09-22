import React from 'react';
import ReactDOM from 'react-dom';
import Go from './Go';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
configure({ adapter: new Adapter() });




describe('jest test', function() {
    const elfDebugEnzyme = new ElfDebugEnzyme(true, 'Go.test.js', false);

    it('renders without crashing', () => {

        const div = document.createElement('div');
        ReactDOM.render(<Go />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders and reads H1 text', () => {
        const welcome = <h1>React and Jest</h1>;

        const wrapper = shallow(<Go />);
        //console.log("Wrapper: " + wrapper);

        //elfDebugEnzyme.getFirst(wrapper, welcome.type);


        elfDebugEnzyme.getFirst(wrapper, welcome.type, true);
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click message', () => {
        const jestFunc = jest.fn();
        const wrapper = shallow(<Go />);
        wrapper.instance().elfQuery = jestFunc;
        wrapper.find('#elfQueryAction').simulate('click');
        expect(jestFunc).toHaveBeenCalledTimes(1);
    });

    it('should call setData with valid JSON causing component refresh', () => {

       // const target =<p>Hello</p>;
        const result = <p>Hello foo test code</p>;
        const wrapper = shallow(<Go />);

        //elfDebugEnzyme.getFirst(wrapper, result.type, true);
        wrapper.instance().setFooData({result: 'foo test code'});

        expect(wrapper.contains(result)).toEqual(true);
    });



});