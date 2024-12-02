import { describe, it, expect } from 'vitest';
import { createFrame } from '../../../src/adventjs/02_framing_names/createFrame';

const names = ['Raul', 'Rafael', 'Pablo', 'Juan'];

describe('createFrame', () => {
    it('si le pasamos un nombre lo enmarcar con asteriscos y al menos un espacio entre cada nombre', () => {
        const frame = createFrame(["midu"]);
        expect(typeof frame).toBe('string');
        expect(frame.length).toBeGreaterThan(0);
        expect(frame).equal("********\n* midu *\n********");
    });

    it('si le pasamos tres nombres lo encuadra ajustando al mayor', () => {
        const frame = createFrame(['midu', 'madeval', 'educalvolpz']);
        expect(frame).equal("***************\n* midu        *\n* madeval     *\n* educalvolpz *\n***************");
    });

    it('otra prueba generica con tres nombres', () => {
        const frame = createFrame(['a', 'bb', 'ccc']);
        expect(frame).equal("*******\n* a   *\n* bb  *\n* ccc *\n*******");
    });

    
});


