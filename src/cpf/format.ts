import { applyPattern, onlyDigits } from '../core/index.js';
import { CPF_PATTERN } from './constants.js';

export function format(value: string): string {
    return applyPattern(onlyDigits(value), CPF_PATTERN);
}
