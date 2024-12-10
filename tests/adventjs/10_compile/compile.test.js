import { describe, it, expect } from 'vitest';
import { compile } from '../../../src/adventjs/10_compile/compile';

describe('compile', () => {

    it('si le pasamos primer caso nos devuelve 1', () => {
        const instructions = [
            'MOV -1 C', // copia -1 al registro 'C',
            'INC C', // incrementa el valor del registro 'C'
            'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
            'MOV C A', // copia el registro 'C' al registro 'a',
            'INC A' // incrementa el valor del registro 'a'
          ]
        const ret = compile(instructions);
        expect(typeof ret).toBe('number');
        expect(ret).toEqual(2);
    })

    it('si le pasamos segundo caso nos devuelve 1', () => {
        const instructions = [
            'MOV 0 A',
            'INC A',
          ]
        const ret = compile(instructions);
        expect(ret).toEqual(1);
    })

    it('si le pasamos tercer caso nos devuelve 1', () => {
        const instructions = [
            'INC A',
            'INC A',
            'DEC A',
            'MOV A B',
          ]
        const ret = compile(instructions);
        expect(ret).toEqual(1);
    })

    it('si le pasamos cuarto caso nos devuelve 5', () => {
        const instructions = [
            'MOV 5 B',
            'DEC B',
            'MOV B A',
            'INC A',
          ]
        const ret = compile(instructions);
        expect(ret).toEqual(5);
    })

    it('si le pasamos quinto caso nos devuelve undefined', () => {
        const instructions = [
            'INC C',
            "DEC B",
            "MOV C Y",
            "INC Y"
          ]
        const ret = compile(instructions);
        expect(ret).toEqual(undefined);
    })

    it('si le pasamos sexto caso nos devuelve -2', () => {
        const instructions = [
            "MOV 2 X",
            "DEC X",
            "DEC X",
            "JMP X 1",
            "MOV X A"
        ]
        const ret = compile(instructions);
        expect(ret).toEqual(-2);
    })

    it('si le pasamos septimo caso nos devuelve -1', () => {
        const instructions = [
            "MOV 3 C",
            "DEC C",
            "DEC C",
            "DEC C",
            "JMP C 3",
            "MOV C A"
        ]
        const ret = compile(instructions);
        expect(ret).toEqual(-1);
    })

    it('si le pasamos undecimo caso nos devuelve -1', () => {
        const instructions = [
            "MOV 10 Z",
            "DEC Z",
            "DEC Z",
            "MOV Z A",
        ]
        const ret = compile(instructions);
        expect(ret).toEqual(8);
    })

    

})
