import {
    CPF_FIRST_WEIGHTS,
    CPF_SECOND_WEIGHTS,
    isRepeated,
    mod11,
    onlyDigits,
    weightedSum,
} from '../core';
import { CPF_LENGTH } from './constants';

export function isValid(value: string): boolean {
    const digits = onlyDigits(value);

    if (digits.length !== CPF_LENGTH) {
        return false;
    }

    if (isRepeated(digits)) {
        return false;
    }

    const toCheckDigit = (remainder: number): number => (remainder < 2 ? 0 : 11 - remainder);

    const firstSum = weightedSum(digits.slice(0, 9), CPF_FIRST_WEIGHTS);

    const firstDigit = toCheckDigit(mod11(firstSum));

    const secondSum = weightedSum(digits.slice(0, 9) + firstDigit, CPF_SECOND_WEIGHTS);

    const secondDigit = toCheckDigit(mod11(secondSum));

    return `${firstDigit}${secondDigit}` === digits.slice(9);
}
