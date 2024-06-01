import { ArrayAlgorithm } from '../algorithms/array.algo';

describe('Array algorithms', () => {
    const arrayAlgorithm = new ArrayAlgorithm();

    test('push', () => {
        const books = ['The Power of Now', 'Meditations'];
        const newBook = 'Inner Engineering';
        const expectedBooks = [...books, newBook]

        expect(arrayAlgorithm.push(books, newBook)).toEqual(expectedBooks);
    });

    test('pop', () => {
        const todo = 'do laundry';
        const todos = ['buy milk', 'clean house', todo];
        const expectedTodos = todos.slice(0, -1);

        const [newTodos, removedTodo] = arrayAlgorithm.pop(todos);

        expect(newTodos).toEqual(expectedTodos);
        expect(removedTodo).toEqual(todo);
    });
});