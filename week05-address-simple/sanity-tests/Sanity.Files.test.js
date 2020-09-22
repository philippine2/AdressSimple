import React from 'react';
import elvenCode from 'elven-code';

describe('Ensure Files Exist Suite', () => {

    it('checks if source/control.js exists', () => {
        const fileName = __dirname + '/../source/control.js';
        expect(elvenCode.elfUtils.fileExists(fileName)).toBe(true);
    });

    it('checks if source/App.js exists', () => {
        const fileName = __dirname + '/../source/App.js';
        expect(elvenCode.elfUtils.fileExists(fileName)).toBe(true);
    });

    it('checks if source/Go.js exists', () => {
        const fileName = __dirname + '/../source/Go.js';
        expect(elvenCode.elfUtils.fileExists(fileName)).toBe(true);
    });

    it('checks if source/First.js exists', () => {
        const fileName = __dirname + '/../source/First.js';
        expect(elvenCode.elfUtils.fileExists(fileName)).toBe(true);
    });

    it('checks if source/ElfHeader.js exists', () => {
        const fileName = __dirname + '/../source/ElfHeader.js';
        expect(elvenCode.elfUtils.fileExists(fileName)).toBe(true);
    });

    it('checks if source/tileData.js exists', () => {
        const fileName = __dirname + '/../source/tileData.js';
        expect(elvenCode.elfUtils.fileExists(fileName)).toBe(true);
    });

    it('checks if source/Go.test.js exists', () => {
        const fileName = __dirname + '/../source/Go.test.js';
        expect(elvenCode.elfUtils.fileExists(fileName)).toBe(true);
    });

    it('checks if views/worker.pug exists', () => {
        const fileName = __dirname + '/../views/worker.pug';
        expect(elvenCode.elfUtils.fileExists(fileName)).toBe(true);
    });

    it('checks if .babelrc exists', () => {
        const fileName = __dirname + '/../.babelrc';
        expect(elvenCode.elfUtils.fileExists(fileName)).toBe(true);
    });

    it('checks if prettier exists', () => {
        const fileName = __dirname + '/../prettier';
        expect(elvenCode.elfUtils.fileExists(fileName)).toBe(true);
    });

    it('checks if .prettierignore exists', () => {
        const fileName = __dirname + '/../.prettierignore';
        expect(elvenCode.elfUtils.fileExists(fileName)).toBe(true);
    });

    it('checks if .eslintrc.json exists', () => {
        const fileName = __dirname + '/../.eslintrc.json';
        expect(elvenCode.elfUtils.fileExists(fileName)).toBe(true);
    });

    it('checks if .eslintignore exists', () => {
        const fileName = __dirname + '/../.eslintignore';
        expect(elvenCode.elfUtils.fileExists(fileName)).toBe(true);
    });

    it('checks if webpack.config.js exists', () => {
        const fileName = __dirname + '/../webpack.config.js';
        expect(elvenCode.elfUtils.fileExists(fileName)).toBe(true);
    });

});
