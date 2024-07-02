import { SkipListAlgorithm } from '../algorithms/skipList.algo';

describe('SkipList', () => {
    let list: SkipListAlgorithm<string>;

    beforeEach(() => {
        list = new SkipListAlgorithm<string>();
    });

    test('insert()', () => {
        list.insert('978-3-16-148410-0');
        expect(list.getSize()).toBe(1);
    });

    test('search()', () => {
        list.insert('978-3-16-148410-0');
        const foundNode = list.search('978-3-16-148410-0');

        expect(foundNode?.value).toBe('978-3-16-148410-0');
    });

    test('delete()', () => {
        list.insert('978-3-16-148410-0');
        const result = list.delete('978-3-16-148410-0');

        expect(result).toBe(true);
        expect(list.getSize()).toBe(0);
    });

    test('getSize()', () => {
        expect(list.getSize()).toBe(0);

        list.insert('978-3-16-148410-0');
        expect(list.getSize()).toBe(1);
    });

    test('insert()', () => {
        list.insert('978-3-16-148410-0');
        list.insert('978-1-4028-9462-6');

        const firstBook = list.search('978-1-4028-9462-6');
        const secondBook = list.search('978-3-16-148410-0');

        expect(firstBook?.next[0]).toBe(secondBook);
    });
});
