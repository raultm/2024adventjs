import { describe, it, expect } from 'vitest';
import { drawTable } from '../../../src/adventjs/15_draw_table/drawTable';

describe('drawTable', () => {

    it('si le pasamos segundo caso nos devuelve la tabla correcta', () => {
        const data = [
            { gift: 'Doll', quantity: 10 },
            { gift: 'Book', quantity: 5 },
            { gift: 'Music CD', quantity: 1 }
          ]
        const expectedResult = [
            "+----------+----------+",
            "| Gift     | Quantity |",
            "+----------+----------+",
            "| Doll     | 10       |",
            "| Book     | 5        |",
            "| Music CD | 1        |",
            "+----------+----------+",
        ].join("\n")
        const ret = drawTable(data);
        expect(typeof ret).toBe('string');
        expect(ret).toEqual(expectedResult);
    })

    it('si le pasamos primer caso nos devuelve la tabla correcta', () => {
        const data = [
            { name: 'Alice', city: 'London' },
            { name: 'Bob', city: 'Paris' },
            { name: 'Charlie', city: 'New York' }
        ]
        const expectedResult = [
            "+---------+----------+",
            "| Name    | City     |",
            "+---------+----------+",
            "| Alice   | London   |",
            "| Bob     | Paris    |",
            "| Charlie | New York |",
            "+---------+----------+"
        ].join("\n")
        const ret = drawTable(data);
        expect(typeof ret).toBe('string');
        expect(ret).toEqual(expectedResult);
    })
})
