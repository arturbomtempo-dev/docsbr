export function isRepeated(value: string): boolean {
    if (value.length <= 1) {
        return false;
    }

    const first = value[0];

    for (let i = 1; i < value.length; i++) {
        if (value[i] !== first) {
            return false;
        }
    }

    return true;
}
