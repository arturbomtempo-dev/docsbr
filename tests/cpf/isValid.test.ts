import { describe, expect, it } from 'vitest';

import { isValid } from '../../src/cpf/isValid';

describe('isValid', () => {
    it('should validate a valid CPF', () => {
        expect(isValid('52998224725')).toBe(true);
    });

    it('should validate a formatted CPF', () => {
        expect(isValid('529.982.247-25')).toBe(true);
    });

    it('should reject an invalid CPF', () => {
        expect(isValid('52998224724')).toBe(false);
    });

    it('should reject repeated digits', () => {
        expect(isValid('11111111111')).toBe(false);
    });

    it('should reject all zeros', () => {
        expect(isValid('00000000000')).toBe(false);
    });

    it('should reject a short CPF', () => {
        expect(isValid('123')).toBe(false);
    });

    it('should reject an empty string', () => {
        expect(isValid('')).toBe(false);
    });

    it('should reject letters', () => {
        expect(isValid('abcdefghijk')).toBe(false);
    });

    it('should reject mixed input', () => {
        expect(isValid('123abc45678')).toBe(false);
    });

    it('should reject an invalid formatted CPF', () => {
        expect(isValid('123.456.789-00')).toBe(false);
    });

    it('should validate another known valid CPF', () => {
        expect(isValid('11144477735')).toBe(true);
    });

    it('should validate another formatted valid CPF', () => {
        expect(isValid('111.444.777-35')).toBe(true);
    });
});
