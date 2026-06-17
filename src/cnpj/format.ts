import { applyPattern, onlyDigits } from '../core/index.js';
import { CNPJ_PATTERN } from './constants.js';

export function format(value: string): string {
    return applyPattern(onlyDigits(value), CNPJ_PATTERN);
}
