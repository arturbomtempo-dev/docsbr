import { describe, expect, it } from 'vitest';
import { isValid } from '../../src/cnpj';

describe('cnpj.isValid', () => {
    it('should validate valid cnpj', () => {
        expect(isValid('11444777000161')).toBe(true);
    });

    it('should validate formatted cnpj', () => {
        expect(isValid('11.444.777/0001-61')).toBe(true);
    });

    it('should reject invalid cnpj', () => {
        expect(isValid('11444777000162')).toBe(false);
    });

    it('should reject repeated digits', () => {
        expect(isValid('11111111111111')).toBe(false);
    });

    it('should reject zeros', () => {
        expect(isValid('00000000000000')).toBe(false);
    });

    it('should reject short input', () => {
        expect(isValid('123')).toBe(false);
    });

    it('should reject empty string', () => {
        expect(isValid('')).toBe(false);
    });

    it('should reject letters', () => {
        expect(isValid('abcdefghijklmn')).toBe(false);
    });

    it('should reject mixed input', () => {
        expect(isValid('11abc444777000')).toBe(false);
    });

    it('should reject invalid formatted cnpj', () => {
        expect(isValid('11.444.777/0001-00')).toBe(false);
    });
});
