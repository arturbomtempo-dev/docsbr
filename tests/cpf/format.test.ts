import { describe, expect, it } from 'vitest';
import { format } from '../../src/cpf/format';

describe('format', () => {
    it('should format cpf', () => {
        expect(format('12345678909')).toBe('123.456.789-09');
    });

    it('should keep formatted cpf', () => {
        expect(format('123.456.789-09')).toBe('123.456.789-09');
    });

    it('should support partial cpf', () => {
        expect(format('1234')).toBe('123.4');
    });

    it('should return empty string', () => {
        expect(format('')).toBe('');
    });
});
