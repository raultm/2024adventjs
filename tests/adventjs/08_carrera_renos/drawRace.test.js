import { describe, it, expect } from 'vitest';
import { drawRace } from '../../../src/adventjs/08_carrera_renos/drawRace';

describe('drawRace', () => {

    it('si le pasamos primer caso nos devuelve el estado de la carrera', () => {
        const ret = drawRace([0, 5, -3], 10);
        expect(typeof ret).toBe('string');
        expect(ret)
            .toEqual([
               "  ~~~~~~~~~~ /1",
               " ~~~~~r~~~~ /2",
               "~~~~~~~r~~ /3"
            ].join("\n"));
    })

    it('si le pasamos segundo caso nos devuelve el estado de la carrera', () => {
        const ret = drawRace([2, -1, 0, 5], 8);
        expect(typeof ret).toBe('string');
        expect(ret)
            .toEqual([
              "   ~~r~~~~~ /1",
              "  ~~~~~~~r /2",
              " ~~~~~~~~ /3",
              "~~~~~r~~ /4"
            ].join("\n"));
    })

    it('si le pasamos tercer caso nos devuelve el estado de la carrera', () => {
        const ret = drawRace([3, 7, -2], 12);
        expect(typeof ret).toBe('string');
        expect(ret)
            .toEqual([
                "  ~~~r~~~~~~~~ /1",
                " ~~~~~~~r~~~~ /2",
                "~~~~~~~~~~r~ /3"
            ].join("\n"));
    })
      
})
