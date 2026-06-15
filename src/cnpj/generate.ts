import { randomDigits } from '../core';
import { format } from './format';
import { calculateFirstDigit, calculateSecondDigit } from './internal';

export function generate(formatted = false): string {
    const base = randomDigits(12);

    const firstDigit = calculateFirstDigit(base);

    const secondDigit = calculateSecondDigit(base, firstDigit);

    const cnpj = base + firstDigit + secondDigit;

    return formatted ? format(cnpj) : cnpj;
}
