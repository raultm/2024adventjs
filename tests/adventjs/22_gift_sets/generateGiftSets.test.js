import { describe, it, expect } from 'vitest';
import { generateGiftSets } from '../../../src/adventjs/22_gift_sets/generateGiftSets';

describe('generateGiftSets', () => {

    it('si le pasamos primer caso nos devuelve resultado correcto', () => {
        expect(generateGiftSets(['car', 'doll', 'puzzle'])).toEqual([
            ['car'],
            ['doll'],
            ['puzzle'],
            ['car', 'doll'],
            ['car', 'puzzle'],
            ['doll', 'puzzle'],
            ['car', 'doll', 'puzzle']
        ])
    })

    it('si le pasamos segundo caso nos devuelve resultado correcto', () => {
        expect(generateGiftSets(['ball'])).toEqual([
            ['ball'],
        ])
    })

    it('si le pasamos primer caso nos devuelve resultado correcto', () => {
        expect(generateGiftSets(['1', '2', '3', '4'])).toEqual([
            ['1'],
            ['2'],
            ['3'],
            ['4'],
            ['1', '2'],
            ['1', '3'],
            ['1', '4'],
            ['2', '3'],
            ['2', '4'],
            ['3', '4'],
            ['1', '2', '3'],
            ['1', '2', '4'],
            ['1', '3', '4'],
            ['2', '3', '4'],
            ['1', '2', '3', '4']
        ])
    })

    
})
