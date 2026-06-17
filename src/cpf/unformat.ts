import { onlyDigits } from '../core/index.js';

export function unformat(value: string): string {
    return onlyDigits(value);
}
