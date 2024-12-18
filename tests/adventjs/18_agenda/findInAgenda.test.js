import { describe, it, expect } from 'vitest';
import { findInAgenda } from '../../../src/adventjs/18_agenda/findInAgenda';

describe('findInAgenda', () => {

    it('si le pasamos primer case nos devuelve resultado correcto', () => {
        const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`
        const expectedResult = { name: "Juan Perez", address: "Calle Gran Via 12" }
        expect(findInAgenda(agenda, '34-600-123-456')).toEqual(expectedResult)
    })
})
