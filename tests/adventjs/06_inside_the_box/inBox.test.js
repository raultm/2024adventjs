import { describe, it, expect } from 'vitest';
import { inBox } from '../../../src/adventjs/06_inside_the_box/inBox';

describe('inBox', () => {

    it('si le pasamos primer caso nos devuelve true', () => {
        let situation = [
            "###",
            "#*#",
            "###"
        ]
        const isInBox = inBox(situation);
        expect(typeof isInBox).toBe('boolean');
        expect(isInBox).toEqual(true);
    })

    it('si le pasamos segundo caso nos devuelve true', () => {
        let situation = [
            "####",
            "#* #",
            "#  #",
            "####"
          ]
        const isInBox = inBox(situation);
        expect(typeof isInBox).toBe('boolean');
        expect(isInBox).toEqual(true);
    })

    it('si le pasamos segundo caso nos devuelve true', () => {
        let situation = [
            "#####",
            "#   #",
            "#  #*",
            "#####"
          ]
        const isInBox = inBox(situation);
        expect(typeof isInBox).toBe('boolean');
        expect(isInBox).toEqual(false);
    })

    



})
