import { describe, it, expect } from 'vitest';
import { findMissingNumbers } from '../../../src/adventjs/23_missing/findMissingNumbers';

describe('findMissingNumbers', () => {

    it('si le pasamos primer caso nos devuelve resultado correcto', () => {
        expect(findMissingNumbers([1, 2, 4, 6])).toEqual([3, 5])
    })

    it('si le pasamos segundo caso nos devuelve resultado correcto', () => {
        expect(findMissingNumbers([4,8,7,2])).toEqual([1,3,5,6])
    })
})
