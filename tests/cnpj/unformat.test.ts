import { describe, expect, it } from 'vitest';
import { unformat } from '../../src/cnpj';

describe('cnpj.unformat', () => {
    it('should remove formatting', () => {
        expect(unformat('12.345.678/0001-95')).toBe('12345678000195');
    });

    it('should keep digits', () => {
        expect(unformat('12345678000195')).toBe('12345678000195');
    });
});
