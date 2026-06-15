import { describe, expect, it } from 'vitest';
import { generate } from '../../src/cpf/generate';
import { isValid } from '../../src/cpf/isValid';

describe('generate', () => {
    it('should generate a valid cpf', () => {
        const cpf = generate();

        expect(isValid(cpf)).toBe(true);
    });

    it('should generate formatted cpf', () => {
        const cpf = generate(true);

        expect(isValid(cpf)).toBe(true);
    });

    it('should generate 11 digits', () => {
        expect(generate()).toHaveLength(11);
    });

    it('should generate 14 formatted characters', () => {
        expect(generate(true)).toHaveLength(14);
    });
});
