import { mod11, weightedSum } from '../algorithms';

export interface CalculateCheckDigitsOptions {
    base: string;
    firstWeights: readonly number[];
    secondWeights: readonly number[];
}

function toCheckDigit(remainder: number): number {
    return remainder < 2 ? 0 : 11 - remainder;
}

export function calculateCheckDigits({
    base,
    firstWeights,
    secondWeights,
}: CalculateCheckDigitsOptions): string {
    const firstDigit = toCheckDigit(mod11(weightedSum(base, firstWeights)));

    const secondDigit = toCheckDigit(mod11(weightedSum(base + firstDigit, secondWeights)));

    return `${firstDigit}${secondDigit}`;
}
