import { describe, it, expect } from 'vitest';
import { detectBombs } from '../../../src/adventjs/17_detect_bombs/detectBombs';

describe('detectBombs', () => {

    it('si le pasamos primer case nos devuelve resultado correcto', () => {
        const data = [
            [true, false, false],
            [false, true, false],
            [false, false, false]
        ]
        const expectedResult = [
            [1, 2, 1],
            [2, 1, 1],
            [1, 1, 1]
        ]
        expect(detectBombs(data)).toEqual(expectedResult)
    })

    it('si le pasamos segundo caso nos devuelve resultado correcto', () => {
        const data = [
            [true, false],
            [false, false]
        ]
        const expectedResult = [
            [0, 1],
            [1, 1]
        ]
        expect(detectBombs(data)).toEqual(expectedResult)
    })
})
