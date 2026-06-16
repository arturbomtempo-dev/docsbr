import { describe, expect, it } from 'vitest';
import { calculateCheckDigits } from '../../../src/core/mod11/calculateCheckDigits';

const CPF_FIRST_WEIGHTS = [10, 9, 8, 7, 6, 5, 4, 3, 2] as const;
const CPF_SECOND_WEIGHTS = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2] as const;
const CNPJ_FIRST_WEIGHTS = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2] as const;
const CNPJ_SECOND_WEIGHTS = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2] as const;

describe('calculateCheckDigits', () => {
    it('should calculate CPF check digits (529.982.247-25)', () => {
        expect(
            calculateCheckDigits({
                base: '529982247',
                firstWeights: CPF_FIRST_WEIGHTS,
                secondWeights: CPF_SECOND_WEIGHTS,
            })
        ).toBe('25');
    });

    it('should calculate CPF check digits (111.444.777-35)', () => {
        expect(
            calculateCheckDigits({
                base: '111444777',
                firstWeights: CPF_FIRST_WEIGHTS,
                secondWeights: CPF_SECOND_WEIGHTS,
            })
        ).toBe('35');
    });

    it('should calculate CNPJ check digits (11.444.777/0001-61)', () => {
        expect(
            calculateCheckDigits({
                base: '114447770001',
                firstWeights: CNPJ_FIRST_WEIGHTS,
                secondWeights: CNPJ_SECOND_WEIGHTS,
            })
        ).toBe('61');
    });

    it('should map remainder 0 to check digit 0', () => {
        // weightedSum('000', [1,1,1]) = 0 → mod11 = 0 → toCheckDigit = 0
        // weightedSum('0000', [1,1,1,1]) = 0 → mod11 = 0 → toCheckDigit = 0
        expect(
            calculateCheckDigits({
                base: '000',
                firstWeights: [1, 1, 1],
                secondWeights: [1, 1, 1, 1],
            })
        ).toBe('00');
    });

    it('should map remainder 1 to check digit 0', () => {
        // weightedSum('100', [1,1,1]) = 1 → mod11 = 1 → toCheckDigit = 0
        // weightedSum('1000', [1,1,1,1]) = 1 → mod11 = 1 → toCheckDigit = 0
        expect(
            calculateCheckDigits({
                base: '100',
                firstWeights: [1, 1, 1],
                secondWeights: [1, 1, 1, 1],
            })
        ).toBe('00');
    });

    it('should map remainder 2 to check digit 9', () => {
        // weightedSum('200', [1,1,1]) = 2 → mod11 = 2 → toCheckDigit = 9
        // weightedSum('2009', [1,1,1,1]) = 11 → mod11 = 0 → toCheckDigit = 0
        expect(
            calculateCheckDigits({
                base: '200',
                firstWeights: [1, 1, 1],
                secondWeights: [1, 1, 1, 1],
            })
        ).toBe('90');
    });

    it('should return a two-character string', () => {
        const result = calculateCheckDigits({
            base: '529982247',
            firstWeights: CPF_FIRST_WEIGHTS,
            secondWeights: CPF_SECOND_WEIGHTS,
        });

        expect(result).toHaveLength(2);
    });
});
