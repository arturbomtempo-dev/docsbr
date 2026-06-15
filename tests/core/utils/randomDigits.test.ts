import { describe, expect, it } from 'vitest';
import { randomDigits } from '../../../src/core/utils/randomDigits';

describe('randomDigits', () => {
    it('should generate the correct length', () => {
        expect(randomDigits(5)).toHaveLength(5);
    });

    it('should generate only digits', () => {
        expect(/^[0-9]+$/.test(randomDigits(20))).toBe(true);
    });

    it('should generate empty string', () => {
        expect(randomDigits(0)).toBe('');
    });
});
