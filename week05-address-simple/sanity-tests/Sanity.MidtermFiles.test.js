import React from 'react';
import elvenCode from 'elven-code';
import ReactDOM from 'react-dom';
import AddressForm from '../source/AddressForm';
import AddressShow from '../source/AddressShow';
import {testData} from './test-data';
import { setLocalStorage } from '../source/address-local-storage';
import { clearLocalStorage } from '../source/elf-local-storage';
import AddressLister from '../source/AddressLister';

describe('Midterm Files Suite', () => {

    beforeEach(() => {
        setLocalStorage(testData);
    });

    afterEach(() => {
        clearLocalStorage();
    });

    it('checks if source/AddressShow exists', () => {
        const fileName = __dirname + '/../source/AddressShow.js';
        expect(elvenCode.elfUtils.fileExists(fileName)).toBe(true);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AddressShow />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('checks if source/AddressForm exists', () => {
        const fileName = __dirname + '/../source/AddressForm.js';
        expect(elvenCode.elfUtils.fileExists(fileName)).toBe(true);
    });

    it('renders AddressForm without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AddressForm />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('checks if source/Lister exists', () => {
        const fileName = __dirname + '/../source/AddressLister.js';
        expect(elvenCode.elfUtils.fileExists(fileName)).toBe(true);
    });

    it('renders Lister without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AddressLister />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

});
