import { calculateCheckDigits, randomDigits } from '../core';
import { CNPJ_BASE_LENGTH, CNPJ_FIRST_WEIGHTS, CNPJ_SECOND_WEIGHTS } from './constants';
import { format } from './format';

export function generate(formatted = false): string {
    const base = randomDigits(CNPJ_BASE_LENGTH);
    const checkDigits = calculateCheckDigits({
        base,
        firstWeights: CNPJ_FIRST_WEIGHTS,
        secondWeights: CNPJ_SECOND_WEIGHTS,
    });
    const cnpj = base + checkDigits;

    return formatted ? format(cnpj) : cnpj;
}
