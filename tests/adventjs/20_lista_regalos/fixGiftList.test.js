import { describe, it, expect } from 'vitest';
import { fixGiftList } from '../../../src/adventjs/20_lista_regalos/fixGiftList';

describe('fixGiftList', () => {

    it('si le pasamos primer caso nos devuelve resultado correcto', () => {
        const received = ['puzzle', 'car', 'doll', 'car']
        const expected = ['car', 'puzzle', 'doll', 'ball']
        const expectedResult =
        {
            missing: { ball: 1 },
            extra: { car: 1 }
        }
        const result = fixGiftList(received, expected)
        expect(result).toEqual(expectedResult)
    })

    it('si le pasamos segundo caso nos devuelve resultado correcto', () => {
        const received = ['book', 'train', 'kite', 'train']
        const expected = ['train', 'book', 'kite', 'ball', 'kite']
  
        const expectedResult =
        {
          missing: { ball: 1, kite: 1 },
          extra: { train: 1 }
        }
        const result = fixGiftList(received, expected)
        expect(result).toEqual(expectedResult)
    })

    it('si le pasamos segundo caso nos devuelve resultado correcto', () => {
        const received = ['catan']
        const expected = []
  
        const expectedResult =
        {
          missing: {  },
          extra: { catan: 1 }
        }
        const result = fixGiftList(received, expected)
        expect(result).toEqual(expectedResult)
    })



})
