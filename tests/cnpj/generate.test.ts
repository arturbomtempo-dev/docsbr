import { describe, expect, it } from 'vitest';
import { generate, isValid } from '../../src/cnpj';

describe('cnpj.generate', () => {
    it('should generate valid cnpj', () => {
        const cnpj = generate();

        expect(isValid(cnpj)).toBe(true);
    });

    it('should generate formatted cnpj', () => {
        const cnpj = generate(true);

        expect(isValid(cnpj)).toBe(true);
    });

    it('should generate 14 digits', () => {
        expect(generate()).toHaveLength(14);
    });

    it('should generate 18 formatted chars', () => {
        expect(generate(true)).toHaveLength(18);
    });
});
