import { calculateCheckDigits, isRepeated, onlyDigits } from '../core/index.js';
import { CPF_BASE_LENGTH, CPF_FIRST_WEIGHTS, CPF_LENGTH, CPF_SECOND_WEIGHTS } from './constants.js';

export function isValid(value: string): boolean {
    const digits = onlyDigits(value);

    if (digits.length !== CPF_LENGTH) {
        return false;
    }

    if (isRepeated(digits)) {
        return false;
    }

    const base = digits.slice(0, CPF_BASE_LENGTH);
    const checkDigits = calculateCheckDigits({
        base,
        firstWeights: CPF_FIRST_WEIGHTS,
        secondWeights: CPF_SECOND_WEIGHTS,
    });

    return checkDigits === digits.slice(CPF_BASE_LENGTH);
}
