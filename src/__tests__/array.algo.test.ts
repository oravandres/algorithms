import { ArrayAlgorithm } from '../algorithms/array.algo';
import { Utils } from '../utils';

describe('Array algorithms', () => {
  const arrayAlgorithm = new ArrayAlgorithm();
  const utils = new Utils();

  /**
   * Mutator Methods
   *
   * Mutator methods modify the array in place, altering its contents directly.
   */
  describe('Mutator Methods', () => {
    test('push', () => {
      const books = ['The Power of Now', 'Meditations'];
      const newBook = 'Inner Engineering';
      const expectedBooks = [...books, newBook];

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

        expect(arrayAlgorithm.splice([...months], 0, 0, december)).toEqual(
          expectedMonths,
        );
      });

      test('removes', () => {
        expect(
          arrayAlgorithm.splice([...months, 'May'], months.length, 1),
        ).toEqual(months);
      });

      test('replaces', () => {
        const june = 'June';
        const expectedMonths = [...months.slice(0, -1), june];

        expect(
          arrayAlgorithm.splice([...months], months.length - 1, 1, june),
        ).toEqual(expectedMonths);
      });
    });

    test('reverse', () => {
      const days = ['Monday', 'Tuesday', 'Wednesday'];
      const expectedDays = days.slice().reverse();

      expect(arrayAlgorithm.reverse(days)).toEqual(expectedDays);
    });

    describe('sort', () => {
      test('names', () => {
        const sortedNames = ['Anny', 'Beth', 'Chris', 'Dan', 'Ed'];
        const shuffledNames = utils.shuffle(sortedNames);

        expect(arrayAlgorithm.sort(shuffledNames)).toEqual(sortedNames);
      });

      test('numbers', () => {
        const sortedNumbers = [1, 2, 2000, 3, 30, 31, 351];
        const shuffledNumbers = utils.shuffle(sortedNumbers);

        expect(arrayAlgorithm.sort(shuffledNumbers)).toEqual(sortedNumbers);
      });
    });
  });

  /**
   * Accessor Methods
   *
   * Accessor methods do not modify the original array but return some derived or specific value based on the array's content.
   */
  describe('Accessor Methods', () => {
    test('concat', () => {
      const earlyYears = [2001, 2002, 2003, 2004];
      const midYears = [2021, 2022, 2023, 2024];
      const futureYears = [2045, 2046, 2047];
      const allYearsCombined = [...earlyYears, ...midYears, ...futureYears];

      expect(arrayAlgorithm.concat(earlyYears, midYears, futureYears)).toEqual(
        allYearsCombined,
      );
    });

    test('slice', () => {
      const start = 1; // inclusive
      const end = 3; // exclusive

      const games = ['Fallout', 'Diablo', 'Star Craft', 'Tetris', 'Quake'];
      const expectedGames = ['Diablo', 'Star Craft'];

      expect(arrayAlgorithm.slice(games, start, end)).toEqual(expectedGames);
    });

    describe('indexOf', () => {
      const words = ['Sunshine', 'Breeze', 'Sunshine'];

      test('first occurrence', () => {
        const word = 'Sunshine';
        const expectedIndex = 0;

        expect(arrayAlgorithm.indexOf(words, word)).toEqual(expectedIndex);
      });

      test('second occurrence', () => {
        const word = 'Sunshine';
        const start = 1;
        const expectedIndex = 2;

        expect(arrayAlgorithm.indexOf(words, word, start)).toEqual(
          expectedIndex,
        );
      });

      test('not found', () => {
        const word = 'Snow';
        const expectedIndex = -1;

        expect(arrayAlgorithm.indexOf(words, word)).toEqual(expectedIndex);
      });
    });
  });
});
