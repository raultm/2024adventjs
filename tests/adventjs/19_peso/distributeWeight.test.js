import { describe, it, expect } from 'vitest';
import { distributeWeight } from '../../../src/adventjs/19_peso/distributeWeight';

describe('distributeWeight', () => {

    it('si le pasamos primer caso nos devuelve resultado correcto', () => {

        const expectedResult = [
            ' _ ',
            '|_|'
        ]
        const result = distributeWeight(1)
        expect(result).toEqual(expectedResult.join('\n'))
    })

    it('si le pasamos segundo caso nos devuelve resultado correcto', () => {

        const expectedResult = [
            ' ___ ',
            '|___|'
        ]
        const result = distributeWeight(2)
        expect(result).toEqual(expectedResult.join('\n'))
    })

    it('si le pasamos tercer caso nos devuelve resultado correcto', () => {

        const expectedResult = [
            ' _ ',
            '|_|_',
            '|___|'
        ]
        const result = distributeWeight(3)
        expect(result).toEqual(expectedResult.join('\n'))
    })

})
