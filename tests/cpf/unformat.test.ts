import { describe, expect, it } from 'vitest';
import { unformat } from '../../src/cpf/unformat';

describe('unformat', () => {
    it('should remove formatting', () => {
        expect(unformat('123.456.789-09')).toBe('12345678909');
    });

    it('should return same digits', () => {
        expect(unformat('12345678909')).toBe('12345678909');
    });
});
