import { describe, it, expect } from 'vitest';
import { createXmasTree } from '../../../src/adventjs/04_xmas_tree/createXmasTree';

describe('createXmasTree', () => {
    it('si le pasamos 5 y asterisco devuelve el arbol correcto', () => {
        const xmasTree = createXmasTree(5, '*');
        expect(typeof xmasTree).toBe('string');
        expect(xmasTree).toEqual([
            "____*____",
            "___***___",
            "__*****__",
            "_*******_",
            "*********",
            "____#____",
            "____#____"
        ].join('\n'));
    });

    it('si le pasamos 3 y simbolo mas devuelve el arbol correcto', () => {
        const xmasTree = createXmasTree(3, '+');
        expect(typeof xmasTree).toBe('string');
        expect(xmasTree).toEqual([
            "__+__",
            "_+++_",
            "+++++",
            "__#__",
            "__#__"
        ].join('\n'));
    });

    it('si le pasamos 6 y simbolo arroba devuelve el arbol correcto', () => {
        const xmasTree = createXmasTree(6, '@');
        expect(typeof xmasTree).toBe('string');
        expect(xmasTree).toEqual([
            "_____@_____",
            "____@@@____",
            "___@@@@@___",
            "__@@@@@@@__",
            "_@@@@@@@@@_",
            "@@@@@@@@@@@",
            "_____#_____",
            "_____#_____"
        ].join('\n'));
    });
})