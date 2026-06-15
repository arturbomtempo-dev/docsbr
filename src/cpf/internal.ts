import { CPF_FIRST_WEIGHTS, CPF_SECOND_WEIGHTS, mod11, weightedSum } from '../core';

export function toCheckDigit(remainder: number): number {
    return remainder < 2 ? 0 : 11 - remainder;
}

export function calculateFirstDigit(base: string): number {
    return toCheckDigit(mod11(weightedSum(base, CPF_FIRST_WEIGHTS)));
}

export function calculateSecondDigit(base: string, firstDigit: number): number {
    return toCheckDigit(mod11(weightedSum(base + firstDigit, CPF_SECOND_WEIGHTS)));
}
