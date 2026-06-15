import { describe, expect, it } from 'vitest';
import { onlyDigits } from '../../../src/core/utils/onlyDigits.js';

describe('onlyDigits', () => {
    it('should remove dots', () => {
        expect(onlyDigits('123.456.789')).toBe('123456789');
    });

    it('should remove dashes', () => {
        expect(onlyDigits('123-456-789')).toBe('123456789');
    });

    it('should remove slashes', () => {
        expect(onlyDigits('12.345.678/0001-95')).toBe('12345678000195');
    });

    it('should remove spaces', () => {
        expect(onlyDigits('123 456 789')).toBe('123456789');
    });

    it('should remove letters', () => {
        expect(onlyDigits('abc123def456')).toBe('123456');
    });

    it('should remove special characters', () => {
        expect(onlyDigits('@#1$2%3&4*')).toBe('1234');
    });

    it('should return the same string if it already contains only digits', () => {
        expect(onlyDigits('123456789')).toBe('123456789');
    });

    it('should return an empty string', () => {
        expect(onlyDigits('')).toBe('');
    });

    it('should return an empty string when there are no digits', () => {
        expect(onlyDigits('abcdef')).toBe('');
    });

    it('should keep leading zeros', () => {
        expect(onlyDigits('000.123')).toBe('000123');
    });
});
