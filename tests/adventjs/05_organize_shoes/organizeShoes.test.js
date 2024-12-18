import { describe, it, expect } from 'vitest';
import { organizeShoes } from '../../../src/adventjs/05_organize_shoes/organizeShoes';

describe('organizeShoes', () => {
    
    it('si le pasamos primer caso nos devuelve 38 y 42', () => {
        const shoes = [
            { type: 'I', size: 38 },
            { type: 'R', size: 38 },
            { type: 'R', size: 42 },
            { type: 'I', size: 41 },
            { type: 'I', size: 42 }
          ]
        const organizedShoes = organizeShoes(shoes);
        expect(typeof organizedShoes).toBe('object');
        expect(organizedShoes).toEqual([38,42]);
    })

    it('si le pasamos segundo caso nos devuelve 38 y 38', () => {
        const shoes = [
            { type: 'I', size: 38 },
            { type: 'R', size: 38 },
            { type: 'I', size: 38 },
            { type: 'I', size: 38 },
            { type: 'R', size: 38 }
          ]
        const organizedShoes = organizeShoes(shoes);
        expect(typeof organizedShoes).toBe('object');
        expect(organizedShoes).toEqual([38,38]);
    })

    it('si le pasamos tercer caso nos devuelve vacio', () => {
        const shoes = [
            { type: 'I', size: 38 },
            { type: 'R', size: 36 },
            { type: 'R', size: 42 },
            { type: 'I', size: 41 },
            { type: 'I', size: 42 }
          ]
        const organizedShoes = organizeShoes(shoes);
        expect(typeof organizedShoes).toBe('object');
        expect(organizedShoes).toEqual([42]);
    })

    it('si le pasamos sexto caso nos devuelve un par de 39', () => {
        const shoes = [
            { type: 'I', size: 39 },
            { type: 'R', size: 39 },
            { type: 'R', size: 39 },
          ]
        const organizedShoes = organizeShoes(shoes);
        expect(typeof organizedShoes).toBe('object');
        expect(organizedShoes).toEqual([39]);
    })



})
