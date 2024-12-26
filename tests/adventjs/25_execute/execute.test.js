import { describe, it, expect } from 'vitest';
import { execute } from '../../../src/adventjs/25_execute/execute';

describe('execute', () => {

    it('si le pasamos primer caso nos devuelve resultado correcto', () => {
        expect(execute('+++')).toEqual(3)
    })

    it('si le pasamos segundo caso nos devuelve resultado correcto', () => {
        expect(execute('+--')).toEqual(-1)
    })

    it('si le pasamos tercer caso nos devuelve resultado correcto', () => {
        expect(execute('>+++[-]')).toEqual(0)
    })

    it('si le pasamos cuarto caso nos devuelve resultado correcto', () => {
        expect(execute('>>>+{++}')).toEqual(3)
    })

    it('si le pasamos quinto caso nos devuelve resultado correcto', () => {
        expect(execute('+{[-]+}+')).toEqual(2)
    })

    it('si le pasamos sexto caso nos devuelve resultado correcto', () => {
        expect(execute('{+}{+}{+}')).toEqual(0)
    })

    it('si le pasamos septimo caso nos devuelve resultado correcto', () => {
        expect(execute('------[+]++')).toEqual(2)
    })

    it('si le pasamos octavo caso nos devuelve resultado correcto', () => {
        expect(execute('-[++{-}]+{++++}')).toEqual(5)
    })
    
})
