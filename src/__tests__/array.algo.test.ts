import { ArrayAlgorithm } from '../algorithms/array.algo';

describe('Array algorithms', () => {
    const arrayAlgorithm = new ArrayAlgorithm();

    test('push', () => {
        const books = ['The Power of Now', 'Meditations'];
        const newBook = 'Inner Engineering';
        const expectedBooks = [...books, newBook]

        expect(arrayAlgorithm.push(books, newBook)).toEqual(expectedBooks);
    });

        expect(arrayAlgorithm.push(books, 'Inner Engineering')).toEqual(['The Power of Now', 'Meditations', 'Inner Engineering']);
    })
})