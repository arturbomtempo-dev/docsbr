import { applyPattern, onlyDigits } from '../core';
import { CPF_PATTERN } from './constants';

export function format(value: string): string {
    return applyPattern(onlyDigits(value), CPF_PATTERN);
}
