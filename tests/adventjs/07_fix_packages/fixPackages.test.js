import { describe, it, expect } from 'vitest';
import { fixPackages } from '../../../src/adventjs/07_fix_packages/fixPackages';

describe('fixPackages', () => {

    it('si le pasamos primer caso nos devuelve abcde', () => {
        let situation = 'a(cb)de'
        const ret = fixPackages(situation);
        expect(typeof ret).toBe('string');
        expect(ret).toEqual('abcde');
    })

    it('si le pasamos segundo caso nos devuelve agdefcbh', () => {
        let situation = 'a(bc(def)g)h'
        const ret = fixPackages(situation);
        expect(typeof ret).toBe('string');
        expect(ret).toEqual("agdefcbh");
    })

    it('si le pasamos tercer caso nos devuelve abcde', () => {
        let situation = 'abc(def(gh)i)jk'
        const ret = fixPackages(situation);
        expect(typeof ret).toBe('string');
        expect(ret).toEqual("abcighfedjk");
    })

    

    
})
