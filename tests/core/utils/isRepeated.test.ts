import { describe, expect, it } from 'vitest';
import { isRepeated } from '../../../src/core/utils/isRepeated.js';

describe('isRepeated', () => {
    it('should return true for repeated digits', () => {
        expect(isRepeated('11111111111')).toBe(true);
    });

    it('should return true for zeros', () => {
        expect(isRepeated('00000000000')).toBe(true);
    });

    it('should return true for repeated letters', () => {
        expect(isRepeated('aaaaaa')).toBe(true);
    });

    it('should return true for repeated symbols', () => {
        expect(isRepeated('!!!!!!')).toBe(true);
    });

    it('should return false for cpf', () => {
        expect(isRepeated('12345678909')).toBe(false);
    });

    it('should return false for cnpj', () => {
        expect(isRepeated('12345678000195')).toBe(false);
    });

    it('should return false for mixed letters', () => {
        expect(isRepeated('abcabc')).toBe(false);
    });

    it('should return false for empty string', () => {
        expect(isRepeated('')).toBe(false);
    });

    it('should return false for single character', () => {
        expect(isRepeated('1')).toBe(false);
    });

    it('should return false for two different characters', () => {
        expect(isRepeated('12')).toBe(false);
    });

    it('should return true for two equal characters', () => {
        expect(isRepeated('11')).toBe(true);
    });
});
