import { onlyDigits } from '../core';

export function unformat(value: string): string {
    return onlyDigits(value);
}
