import { ArrayAlgorithm } from '../algorithms/array.algo';

describe('Array algorithms', () => {
    const arrayAlgorithm = new ArrayAlgorithm();

    test('push', () => {
        const books = ['The Power of Now', 'Meditations'];

        expect(arrayAlgorithm.push(books, 'Inner Engineering')).toEqual(['The Power of Now', 'Meditations', 'Inner Engineering']);
    })
})