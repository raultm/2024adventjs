import { describe, it, expect } from 'vitest';
import { greetings } from '../../src/common/greetings'

describe('Greetings Module', () => {
    it('greet() should return a greeting message', () => {
        const name = 'Vitest';
        const result = greetings(name);
        expect(result).toBe('Hello, Vitest!');
    });

    it('greet() should handle empty names gracefully', () => {
        const result = greetings('');
        expect(result).toBe('Hello, !');
    });
});
