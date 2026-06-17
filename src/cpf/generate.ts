import { calculateCheckDigits, randomDigits } from '../core/index.js';
import { CPF_BASE_LENGTH, CPF_FIRST_WEIGHTS, CPF_SECOND_WEIGHTS } from './constants.js';
import { format } from './format.js';

export function generate(formatted = false): string {
    const base = randomDigits(CPF_BASE_LENGTH);
    const checkDigits = calculateCheckDigits({
        base,
        firstWeights: CPF_FIRST_WEIGHTS,
        secondWeights: CPF_SECOND_WEIGHTS,
    });
    const cpf = base + checkDigits;

    return formatted ? format(cpf) : cpf;
}
