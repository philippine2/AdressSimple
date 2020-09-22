import React from 'react';
import { clearLocalStorage, getByIndex, getCount } from '../source/elf-local-storage';
import { dataLoaded, setLocalStorage } from '../source/address-local-storage';
import elvenCode from 'elven-code';
import {testData} from './test-data';

describe('Local Storage', () => {

    beforeEach(() => {
       setLocalStorage(testData);
    });

    afterEach(() => {
        clearLocalStorage();
    });

    it('checks if elf-local-storage exists', () => {
        const fileName = __dirname + '/../source/elf-local-storage.js';
        expect(elvenCode.elfUtils.fileExists(fileName)).toBe(true);
    });

    it('checks if address-local-storage exists', () => {
        const fileName = __dirname + '/../source/elf-local-storage.js';
        expect(elvenCode.elfUtils.fileExists(fileName)).toBe(true);
    });

    it('checks if elven-store is set', () => {
        expect(dataLoaded()).toBe(true);
    });

    it('checks if elven-store is set to 1', () => {
        expect(localStorage.getItem('elven-store')).toBe('1');
    });

    it('checks that count = 2', () => {
       expect(getCount()).toBe('2');
    });

    it('checks if one record is set', () => {
        const address = getByIndex(0);

        expect(address).toEqual(expect.objectContaining({
                firstName: 'Lamar',
                lastName: 'Alexander',
            }),
        );
    });

    it('checks if one record is set', () => {
        const address = getByIndex(1);

        expect(address).toEqual(expect.objectContaining({
                firstName: 'Susan',
                lastName: 'Collins',
            }),
        );
    });

});
