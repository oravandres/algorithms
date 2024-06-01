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

    test('shift', () => {
        const car = 'BMW';
        const cars = [car, 'Tesla', 'KIA'];
        const expectedCars = cars.slice(1);

        const [newCars, removedCar] = arrayAlgorithm.shift(cars);

        expect(newCars).toEqual(expectedCars);
        expect(removedCar).toEqual(car);
    });

    test('unshift', () => {
        const movie = 'Pitch Black';
        const movies = ['Riddick', 'The Chronicles of Riddick'];
        const expectedMovies = [movie, ...movies];

        expect(arrayAlgorithm.unshift(movies, movie)).toEqual(expectedMovies);
    });

    describe('splice', () => {
        const months = ['January', 'February', 'March', 'April'];

        test('adds', () => {
            const december = 'December';
            const expectedMonths = [december, ...months];
            expect(arrayAlgorithm.splice([...months], 0, 0, december)).toEqual(expectedMonths);
        });

        test('removes', () => {
            const may = 'May';
            expect(arrayAlgorithm.splice([...months, may], months.length, 1)).toEqual(months);
        });

        test('replaces', () => {
            const june = 'June';
            const expectedMonths = [...months.slice(0, -1), june];
            expect(arrayAlgorithm.splice([...months], months.length - 1, 1, june)).toEqual(expectedMonths);
        });
    });
});