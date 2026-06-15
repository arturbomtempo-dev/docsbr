import { describe, expect, it } from 'vitest';
import { mod11 } from '../../../src/core/algorithms/mod11';

describe('mod11', () => {
    it('should return zero', () => {
        expect(mod11(0)).toBe(0);
    });

    it('should calculate remainder 1', () => {
        expect(mod11(12)).toBe(1);
    });

    it('should calculate remainder 2', () => {
        expect(mod11(13)).toBe(2);
    });

    it('should calculate remainder 3', () => {
        expect(mod11(25)).toBe(3);
    });

    it('should calculate remainder 4', () => {
        expect(mod11(26)).toBe(4);
    });

    it('should calculate remainder 5', () => {
        expect(mod11(27)).toBe(5);
    });

    it('should calculate remainder 6', () => {
        expect(mod11(28)).toBe(6);
    });

    it('should calculate remainder 7', () => {
        expect(mod11(29)).toBe(7);
    });

    it('should calculate remainder 8', () => {
        expect(mod11(30)).toBe(8);
    });

    it('should calculate remainder 9', () => {
        expect(mod11(31)).toBe(9);
    });

    it('should calculate remainder 10', () => {
        expect(mod11(32)).toBe(10);
    });

    it('should work with multiples of 11', () => {
        expect(mod11(121)).toBe(0);
    });

    it('should work with large numbers', () => {
        expect(mod11(987654321)).toBe(987654321 % 11);
    });
});
