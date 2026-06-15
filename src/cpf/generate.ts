import { randomDigits } from '../core';
import { format } from './format';
import { calculateFirstDigit, calculateSecondDigit } from './internal';

export function generate(formatted = false): string {
    const base = randomDigits(9);

    const firstDigit = calculateFirstDigit(base);

    const secondDigit = calculateSecondDigit(base, firstDigit);

    const cpf = base + firstDigit + secondDigit;

    return formatted ? format(cpf) : cpf;
}
