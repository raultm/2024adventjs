import { describe, it, expect } from 'vitest';
import { moveTrain } from '../../../src/adventjs/09_tren_magico/moveTrain';

describe('moveTrain', () => {

    it('si le pasamos primer caso nos devuelve eat', () => {
        const board = ['·····', '*····', '@····', 'o····', 'o····']
        const ret = moveTrain(board, 'U');
        expect(typeof ret).toBe('string');
        expect(ret).toEqual("eat");
    })

    it('si le pasamos segundo caso nos devuelve crash', () => {
        const board = ['·····', '*····', '@····', 'o····', 'o····']
        const ret = moveTrain(board, 'D');
        expect(ret).toEqual("crash");
    })

    it('si le pasamos tercer caso nos devuelve crash', () => {
        const board = ['·····', '*····', '@····', 'o····', 'o····']
        const ret = moveTrain(board, 'L');
        expect(ret).toEqual("crash");
    })

    it('si le pasamos cuarto caso nos devuelve crash', () => {
        const board = ['·····', '*····', '@····', 'o····', 'o····']
        const ret = moveTrain(board, 'R');
        expect(ret).toEqual("none");
    })

})
