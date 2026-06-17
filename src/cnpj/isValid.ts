import { calculateCheckDigits, isRepeated, onlyDigits } from '../core';
import {
    CNPJ_BASE_LENGTH,
    CNPJ_FIRST_WEIGHTS,
    CNPJ_LENGTH,
    CNPJ_SECOND_WEIGHTS,
} from './constants';

export function isValid(value: string): boolean {
    const digits = onlyDigits(value);

    if (digits.length !== CNPJ_LENGTH) {
        return false;
    }

    if (isRepeated(digits)) {
        return false;
    }

    const base = digits.slice(0, CNPJ_BASE_LENGTH);
    const checkDigits = calculateCheckDigits({
        base,
        firstWeights: CNPJ_FIRST_WEIGHTS,
        secondWeights: CNPJ_SECOND_WEIGHTS,
    });

    return checkDigits === digits.slice(CNPJ_BASE_LENGTH);
}
