import { applyPattern, onlyDigits } from '../core';

import { CNPJ_PATTERN } from './constants';

export function format(value: string): string {
    return applyPattern(onlyDigits(value), CNPJ_PATTERN);
}
