import { Utils } from '../utils';

describe('Utils', () => {
    test('shuffle', () => {
        const utils = new Utils();
        const arr = [1, 2, 3, 4, 5];
        const shuffled = utils.shuffle([...arr]);

        expect(shuffled).toHaveLength(arr.length);
        arr.forEach((element) => {
            expect(shuffled).toContain(element);
        });

        if (arr.length > 1) {
            expect(shuffled).not.toEqual(arr);
        }
    });
})