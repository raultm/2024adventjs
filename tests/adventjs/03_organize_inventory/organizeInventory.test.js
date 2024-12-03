import { describe, it, expect } from 'vitest';
import { organizeInventory } from '../../../src/adventjs/03_organize_inventory/organizeInventory';

describe('organizeInventory', () => {
    it('si le pasamos un juguete nos devuelve inventario', () => {
        const inventary = [
            { name: 'doll', quantity: 5, category: 'toys' },
        ]
        const organizedInventory = organizeInventory(inventary);
        expect(typeof organizedInventory).toBe('object');
        expect(organizedInventory).toEqual({
            "toys": {
                "doll": 5
            }
        });
    });

    it('si le pasamos un juguete nos devuelve inventario', () => {
        const inventary = [
            { name: 'doll', quantity: 5, category: 'toys' },
            { name: 'car', quantity: 3, category: 'toys' },
            { name: 'ball', quantity: 2, category: 'sports' },
            { name: 'car', quantity: 2, category: 'toys' },
            { name: 'racket', quantity: 4, category: 'sports' }
          ]
        const organizedInventory = organizeInventory(inventary);
        expect(typeof organizedInventory).toBe('object');
        expect(organizedInventory).toEqual({
                  toys: {
                    doll: 5,
                    car: 5
                  },
                  sports: {
                    ball: 2,
                    racket: 4
                  }
    });
    });

    

    
});


