import { isRepeated, onlyDigits } from '../core';
import { CPF_LENGTH } from './constants';
import { calculateFirstDigit, calculateSecondDigit } from './internal';

export function isValid(value: string): boolean {
    const digits = onlyDigits(value);

    if (digits.length !== CPF_LENGTH) {
        return false;
    }

    if (isRepeated(digits)) {
        return false;
    }

    const base = digits.slice(0, 9);

    const firstDigit = calculateFirstDigit(base);

    const secondDigit = calculateSecondDigit(base, firstDigit);

    return `${firstDigit}${secondDigit}` === digits.slice(9);
}
