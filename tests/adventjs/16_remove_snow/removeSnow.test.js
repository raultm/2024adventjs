import { describe, it, expect } from 'vitest';
import { removeSnow } from '../../../src/adventjs/16_remove_snow/removeSnow';

describe('removeSnow', () => {

    it('si le pasamos primer caso nos devuelve oz', () => {
        const ret = removeSnow('zxxzoz');
        expect(typeof ret).toBe('string');
        expect(ret).toEqual('oz');
    })

    it('si le pasamos segundo caso nos devuelve abc', () => {
        const ret = removeSnow('abcdd');
        expect(ret).toEqual('abc');
    })

    it('si le pasamos tercer caso nos devuelve z', () => {
        const ret = removeSnow('zzz');
        expect(ret).toEqual('z');
    })

    it('si le pasamos cuarto caso nos devuelve a', () => {
        const ret = removeSnow('a');
        expect(ret).toEqual('a');
    })

    

    

})
