import { describe, expect, it } from 'vitest';
import { format } from '../../src/cnpj';

describe('cnpj.format', () => {
    it('should format cnpj', () => {
        expect(format('12345678000195')).toBe('12.345.678/0001-95');
    });

    it('should keep formatted cnpj', () => {
        expect(format('12.345.678/0001-95')).toBe('12.345.678/0001-95');
    });

    it('should format partial cnpj', () => {
        expect(format('1234')).toBe('12.34');
    });

    it('should return empty string', () => {
        expect(format('')).toBe('');
    });
});
