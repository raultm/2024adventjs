import { describe, it, expect } from 'vitest';
import { minMovesToStables } from '../../../src/adventjs/14_stables/minMovesToStables';

describe('minMovesToStables', () => {

    it('si le pasamos primer case nos devuelve resultado correcto', () => {
        expect(minMovesToStables([2, 6, 9], [3, 8, 5])).toEqual(3)
    })

    it('si le pasamos segundo caso nos devuelve resultado correcto', () => {
        expect(minMovesToStables([1, 1, 3], [1, 8, 4])).toEqual(8)
    })

})
