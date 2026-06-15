import { describe, expect, it } from 'vitest';
import { calculateFirstDigit, calculateSecondDigit, toCheckDigit } from '../../src/cnpj/internal';

describe('cnpj.internal', () => {
    it('should convert remainder 0', () => {
        expect(toCheckDigit(0)).toBe(0);
    });

    it('should convert remainder 1', () => {
        expect(toCheckDigit(1)).toBe(0);
    });

    it('should convert remainder 2', () => {
        expect(toCheckDigit(2)).toBe(9);
    });

    it('should convert remainder 10', () => {
        expect(toCheckDigit(10)).toBe(1);
    });

    it('should calculate first digit', () => {
        expect(calculateFirstDigit('114447770001')).toBe(6);
    });

    it('should calculate second digit', () => {
        expect(calculateSecondDigit('114447770001', 6)).toBe(1);
    });
});
