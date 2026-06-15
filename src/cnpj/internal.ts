import { CNPJ_FIRST_WEIGHTS, CNPJ_SECOND_WEIGHTS, mod11, weightedSum } from '../core';

export function toCheckDigit(remainder: number): number {
    return remainder < 2 ? 0 : 11 - remainder;
}

export function calculateFirstDigit(base: string): number {
    return toCheckDigit(mod11(weightedSum(base, CNPJ_FIRST_WEIGHTS)));
}

export function calculateSecondDigit(base: string, firstDigit: number): number {
    return toCheckDigit(mod11(weightedSum(base + firstDigit, CNPJ_SECOND_WEIGHTS)));
}
