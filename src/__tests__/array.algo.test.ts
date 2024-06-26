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
                const month = 'December';
                const expectedMonths = [month, ...months];
                const start = 0;
                const deleteCount = 0;

                expect(arrayAlgorithm.splice([...months], start, deleteCount, month)).toEqual(expectedMonths);
            });

            test('removes', () => {
                const month = 'May';
                const start = months.length;
                const deleteCount = 1;

                expect(arrayAlgorithm.splice([...months, month], start, deleteCount)).toEqual(months);
            });

            test('replaces', () => {
                const month = 'June';
                const start = months.length - 1;
                const deleteCount = 1;
                const expectedMonths = [...months.slice(0, -1), month];

                expect(arrayAlgorithm.splice([...months], start, deleteCount, month)).toEqual(expectedMonths);
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

            expect(arrayAlgorithm.concat(earlyYears, midYears, futureYears)).toEqual(allYearsCombined);
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

                expect(arrayAlgorithm.indexOf(words, word, start)).toEqual(expectedIndex);
            });

            test('not found', () => {
                const word = 'Snow';
                const expectedIndex = -1;

                expect(arrayAlgorithm.indexOf(words, word)).toEqual(expectedIndex);
            });
        });

        describe('lastIndexOf', () => {
            const books = ['Security Analysis', 'The Intelligent Investor', 'One Up on Wall Street', 'Security Analysis'];

            test('last occurrence', () => {
                const book = 'Security Analysis';
                const expectedIndex = 3;

                expect(arrayAlgorithm.lastIndexOf(books, book)).toEqual(expectedIndex);
            });

            test('second occurrence', () => {
                const book = 'Security Analysis';
                const start = 1;
                const expectedIndex = 0;

                expect(arrayAlgorithm.lastIndexOf(books, book, start)).toEqual(expectedIndex);
            });

            test('not found', () => {
                const book = 'Trading for a Living';
                const expectedIndex = -1;

                expect(arrayAlgorithm.lastIndexOf(books, book)).toEqual(expectedIndex);
            });
        });

        describe('includes', () => {
            const months = ['January', 'May', 'September', 'January', 'March'];

            test('returns true', () => {
                const month = 'May';
                expect(arrayAlgorithm.includes(months, month)).toEqual(true);
            });

            test('returns false', () => {
                const month = 'August';
                expect(arrayAlgorithm.includes(months, month)).toEqual(false);
            });

            test('returns true with specified start index', () => {
                const month = 'January';
                const start = 1;

                expect(arrayAlgorithm.includes(months, month, start)).toEqual(true);
            });
        });

        test('join', () => {
            const numbers = [1, 2, 3, 4, 5];
            const separator = ', ';
            const joinedNumbers = '1, 2, 3, 4, 5';

            expect(arrayAlgorithm.join(numbers, separator)).toEqual(joinedNumbers);
        });

        test('toString', () => {
            const lettersAndNumbers = [1, 'a', 2, 'b', 3];
            const expectedString = '1,a,2,b,3';

            expect(arrayAlgorithm.toString(lettersAndNumbers)).toEqual(expectedString);
        });
    });

    /**
     * Iteration Methods
     *
     * Iteration methods process each element of an array in some manner, usually returning a new value or array based on the original array.
     */
    describe('Iteration Methods', () => {
        test('forEach', () => {
            type Smartphone = {
                brand: string;
                model: string;
                os: string;
            };
            const phones: Smartphone[] = [
                { brand: 'Apple', model: 'iPhone 13', os: 'iOS' },
                { brand: 'Samsung', model: 'Galaxy S21', os: 'Android' },
                { brand: 'Google', model: 'Pixel 6', os: 'Android' },
                { brand: 'OnePlus', model: '9 Pro', os: 'Android' },
                { brand: 'Huawei', model: 'P40 Pro', os: 'Android' },
            ];

            const callback = jest.fn();
            arrayAlgorithm.forEach(phones, callback);

            expect(callback).toHaveBeenCalledTimes(phones.length);

            phones.forEach((phone, index, phones) => {
                expect(callback).toHaveBeenCalledWith(phone, index, phones);
            });
        });

        test('map', () => {
            type Stock = {
                name: string;
                ticker: string;
                exchange: string;
            };

            const stocks: Stock[] = [
                { name: 'Apple Inc.', ticker: 'AAPL', exchange: 'NASDAQ' },
                { name: 'Microsoft Corporation', ticker: 'MSFT', exchange: 'NASDAQ' },
                { name: 'Amazon.com, Inc.', ticker: 'AMZN', exchange: 'NASDAQ' },
                { name: 'Alphabet Inc.', ticker: 'GOOGL', exchange: 'NASDAQ' },
                { name: 'Tesla, Inc.', ticker: 'TSLA', exchange: 'NASDAQ' },
            ];

            const mapFn = (stock: Stock) => {
                return { ...stock, name: stock.name.toUpperCase() };
            };

            const callback = jest.fn(mapFn);
            const mappedStocks = arrayAlgorithm.map(stocks, callback);

            expect(mappedStocks).toEqual(stocks.map(mapFn));
            expect(callback).toHaveBeenCalledTimes(stocks.length);

            stocks.forEach((stock, index, stocks) => {
                expect(callback).toHaveBeenCalledWith(stock, index, stocks);
            });
        });

        test('filter', () => {
            type Movie = {
                title: string;
                genre: string;
                year: number;
            };

            const movies: Movie[] = [
                { title: 'The Lord of the Rings: The Fellowship of the Ring', genre: 'Fantasy', year: 2001 },
                { title: 'Star Wars: Episode IV - A New Hope', genre: 'Sci-Fi', year: 1977 },
                { title: "Harry Potter and the Philosopher's Stone", genre: 'Fantasy', year: 2001 },
                { title: 'The Matrix', genre: 'Sci-Fi', year: 1999 },
                { title: 'The Hobbit: An Unexpected Journey', genre: 'Fantasy', year: 2012 },
            ];

            const filterFn = (movie: Movie) => movie.year < 2000;
            const expectedMovies = movies.filter(filterFn);

            const callback = jest.fn(filterFn);
            const filteredMovies = arrayAlgorithm.filter(movies, callback);

            expect(filteredMovies).toEqual(expectedMovies);
            movies.forEach((movie, index, movies) => {
                expect(callback).toHaveBeenCalledWith(movie, index, movies);
            });
        });

        describe('reduce', () => {
            test('calculates the total price of all products in a shopping cart', () => {
                type Product = {
                    name: string;
                    price: number;
                };

                const products: Product[] = [
                    { name: 'Laptop', price: 1000 },
                    { name: 'Smartphone', price: 500 },
                    { name: 'Headphones', price: 100 },
                ];

                const expectedTotalPrice = 1600;
                const totalPrice = arrayAlgorithm.reduce(products, (total, product) => total + product.price, 0);

                expect(totalPrice).toEqual(expectedTotalPrice);
            });

            test('creates a sentence from an array of words', () => {
                const expectedSentence = 'Waste no more time arguing what a good man should be. Be one.';
                const words = expectedSentence.split(' ');
                const sentence = arrayAlgorithm.reduce(words, (sentence, word) => `${sentence} ${word}`, '');

                expect(sentence.trim()).toEqual(expectedSentence);
            });

            test('counts the frequency of numbers in an array', () => {
                const numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
                const expectedFrequency = { '1': 1, '2': 2, '3': 3, '4': 4 };
                const frequency = arrayAlgorithm.reduce(
                    numbers,
                    (freq: Record<number, number>, num: number) => {
                        freq[num] = (freq[num] || 0) + 1;
                        return freq;
                    },
                    {} as Record<number, number>,
                );

                expect(frequency).toEqual(expectedFrequency);
            });
        });

        describe('reduceRight', () => {
            test('calculates the total weight of all items in a backpack in reverse', () => {
                type Item = {
                    name: string;
                    weight: number;
                };

                const items: Item[] = [
                    { name: 'Water Bottle', weight: 1 },
                    { name: 'Tent', weight: 2.5 },
                    { name: 'Sleeping Bag', weight: 1.5 },
                ];

                const expectedTotalWeight = 5;
                const mockCallback = jest.fn((total, item) => total + item.weight);

                const totalWeight = arrayAlgorithm.reduceRight(items, mockCallback, 0);
                expect(totalWeight).toEqual(expectedTotalWeight);

                for (let i = 0; i < items.length; i++) {
                    expect(mockCallback.mock.calls[i][1]).toEqual(items[items.length - 1 - i]);
                }
            });

            test('creates a sentence from an array of words in reverse order', () => {
                const expectedSentence = 'Small ideas can change the world.';
                const words = expectedSentence.split(' ').reverse();
                const sentence = arrayAlgorithm.reduceRight(words, (sentence, word) => `${sentence} ${word}`, '');

                expect(sentence.trim()).toEqual(expectedSentence);
            });
        });

        describe('some', () => {
            test('returns true when at least one element passes the test', () => {
                const numbers = [0, 1, 2, 3, 4];
                const callback = jest.fn((num: number) => num > 3);

                const result = arrayAlgorithm.some(numbers, callback);
                expect(result).toEqual(true);

                expect(callback).toHaveBeenCalledTimes(numbers.length);

                numbers.forEach((num, index, arr) => {
                    expect(callback).toHaveBeenCalledWith(num, index, arr);
                });
            });

            test('returns false when no elements pass the test', () => {
                const numbers = [0, 1, 2, 3];
                const callback = jest.fn((num: number) => num > 3);

                const result = arrayAlgorithm.some(numbers, callback);
                expect(result).toEqual(false);

                expect(callback).toHaveBeenCalledTimes(numbers.length);

                numbers.forEach((num, index, arr) => {
                    expect(callback).toHaveBeenCalledWith(num, index, arr);
                });
            });
        });

        describe('every', () => {
            test('returns true when all elements pass the test', () => {
                type Product = {
                    name: string;
                    type: string;
                };

                const phones: Product[] = [
                    { name: 'IPhone 11', type: 'phone' },
                    { name: 'Samsung Galaxy S24', type: 'phone' },
                    { name: 'IPhone 14', type: 'phone' },
                ];

                const callback = jest.fn((product: Product) => product.type === 'phone');

                const result = arrayAlgorithm.every(phones, callback);
                expect(result).toEqual(true);

                expect(callback).toHaveBeenCalledTimes(phones.length);

                phones.forEach((num, index, arr) => {
                    expect(callback).toHaveBeenCalledWith(num, index, arr);
                });
            });

            test('returns false when one of the elements do not pass the test', () => {
                const words = ['apple', 'grape', 'lemon', 'melon', 'berry', 'peach', 'blueberry'];
                const callback = jest.fn((word: string) => word.length === 5);

                const result = arrayAlgorithm.every(words, callback);
                expect(result).toEqual(false);

                expect(callback).toHaveBeenCalledTimes(words.length);

                words.forEach((num, index, arr) => {
                    expect(callback).toHaveBeenCalledWith(num, index, arr);
                });
            });
        });

        describe('find', () => {
            test('return the first element that passes the test', () => {
                type File = {
                    name: string;
                    type: string;
                };

                const videoFile = { name: 'france_2008_002.mov', type: 'video' };
                const files: File[] = [
                    { name: 'france_2008_001.jpg', type: 'image' },
                    { name: 'france_2008_002.jpg', type: 'image' },
                    videoFile,
                    { name: 'france_2008_003.jpg', type: 'image' },
                    { name: 'france_2008_003.mov', type: 'video' },
                ];

                const callback = jest.fn((file: File) => file.type === 'video');
                const video = arrayAlgorithm.find(files, callback);

                expect(video).toEqual(videoFile);
                expect(callback).toHaveBeenCalledTimes(files.length - 2);
            });

            test('returns undefined if the element was not found', () => {
                const numbers = [-1, -2, -3, -4];
                const callback = jest.fn((num: number) => num > 0);

                const res = arrayAlgorithm.find(numbers, callback);
                expect(res).toEqual(undefined);

                expect(callback).toHaveBeenCalledTimes(numbers.length);

                numbers.forEach((num: number, index: number, numbers) => {
                    expect(callback).toHaveBeenCalledWith(num, index, numbers);
                });
            });
        });

        describe('findIndex', () => {
            test('return the index of the first element that passes the test', () => {
                type Book = {
                    title: string;
                    genre: string;
                };

                const targetBook = { title: 'The Hobbit', genre: 'Fantasy' };
                const books: Book[] = [
                    { title: '1984', genre: 'Dystopian' },
                    { title: 'To Kill a Mockingbird', genre: 'Southern Gothic' },
                    { title: 'Pride and Prejudice', genre: 'Romance' },
                    targetBook,
                    { title: 'Moby-Dick', genre: 'Adventure' },
                ];

                const callback = jest.fn((book: Book) => book.genre === 'Fantasy');
                const index = arrayAlgorithm.findIndex(books, callback);

                expect(index).toEqual(3);
                expect(callback).toHaveBeenCalledTimes(4);
            });

            test('returns -1 if the element was not found', () => {
                const numbers = [-1, -2, -3, -4];
                const callback = jest.fn((num: number) => num > 0);

                const index = arrayAlgorithm.findIndex(numbers, callback);
                expect(index).toEqual(-1);

                expect(callback).toHaveBeenCalledTimes(numbers.length);

                numbers.forEach((num: number, index: number, numbers) => {
                    expect(callback).toHaveBeenCalledWith(num, index, numbers);
                });
            });
        });
    });

    /**
     * Other Methods
     */
    describe('Other Methods', () => {
        describe('copyWithin', () => {
            test('moves all elements to the right by 2 positions', () => {
                const numbers = [1, 2, 3, 4, 5];
                const copiedNumbers = arrayAlgorithm.copyWithin(numbers, 2);

                expect(copiedNumbers).toEqual([1, 2, 1, 2, 3]);
            });

            test('copies last two elements to the beginning of the array', () => {
                const numbers = [1, 2, 3, 4, 5];
                const copiedNumbers = arrayAlgorithm.copyWithin(numbers, 0, 3);

                expect(copiedNumbers).toEqual([4, 5, 3, 4, 5]);
            });

            test('copies the fourth element to the beginning of the array', () => {
                const numbers = [1, 2, 3, 4, 5];
                const copiedNumbers = arrayAlgorithm.copyWithin(numbers, 0, 3, 4);

                expect(copiedNumbers).toEqual([4, 2, 3, 4, 5]);
            });

            test('copies the third and second elements from the end of the array to the second element from the end', () => {
                const numbers = [1, 2, 3, 4, 5];
                const copiedNumbers = arrayAlgorithm.copyWithin(numbers, -2, -3, -1);

                expect(copiedNumbers).toEqual([1, 2, 3, 3, 4]);
            });
        });

        describe('fill', () => {
            test('fills all elements in an array with a static value', () => {
                type Album = {
                    title: string;
                    artist: string;
                    year: number;
                };

                const albums: Album[] = [
                    { title: 'The Dark Side of the Moon', artist: 'Pink Floyd', year: 1973 },
                    { title: 'Abbey Road', artist: 'The Beatles', year: 1969 },
                    { title: 'Thriller', artist: 'Michael Jackson', year: 1982 },
                ];

                const newAlbum: Album = { title: 'New Album', artist: 'New Artist', year: 2025 };
                const filledAlbums = arrayAlgorithm.fill(albums, newAlbum);

                expect(filledAlbums).toEqual([newAlbum, newAlbum, newAlbum]);
            });

            test('fills a portion of an array with a static value', () => {
                type Book = {
                    title: string;
                    author: string;
                    year: number;
                };

                const books: Book[] = [
                    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
                    { title: '1984', author: 'George Orwell', year: 1949 },
                    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
                ];

                const newBook: Book = { title: 'New Book', author: 'New Author', year: 2025 };
                const filledBooks = arrayAlgorithm.fill(books, newBook, 1, 2);

                expect(filledBooks).toEqual([books[0], newBook, books[2]]);
            });

            test('handles negative indices correctly', () => {
                type Element = {
                    name: string;
                    symbol: string;
                    atomicNumber: number;
                };

                const elements: Element[] = [
                    { name: 'Hydrogen', symbol: 'H', atomicNumber: 1 },
                    { name: 'Helium', symbol: 'He', atomicNumber: 2 },
                    { name: 'Lithium', symbol: 'Li', atomicNumber: 3 },
                ];

                const newElement: Element = { name: 'New Element', symbol: 'Ne', atomicNumber: 0 };
                const filledElements = arrayAlgorithm.fill(elements, newElement, -1);

                expect(filledElements).toEqual([elements[0], elements[1], newElement]);
            });

            test('populates an empty array', () => {
                type Planet = {
                    name: string;
                    order: number;
                };

                const planets: Planet[] = new Array(3);
                const newPlanet: Planet = { name: 'New Planet', order: 0 };
                const filledPlanets = arrayAlgorithm.fill(planets, newPlanet);

                expect(filledPlanets).toEqual([newPlanet, newPlanet, newPlanet]);
            });
        });

        test('entries', () => {
            type Planet = {
                name: string;
                order: number;
            };

            const planets: Planet[] = [
                { name: 'Mercury', order: 1 },
                { name: 'Venus', order: 2 },
                { name: 'Earth', order: 3 },
            ];

            const entries = arrayAlgorithm.entries(planets);

            expect([...entries]).toEqual([
                [0, planets[0]],
                [1, planets[1]],
                [2, planets[2]],
            ]);
        });

        test('keys', () => {
            type Album = {
                title: string;
                artist: string;
                year: number;
            };

            const albums: Album[] = [
                { title: 'The Dark Side of the Moon', artist: 'Pink Floyd', year: 1973 },
                { title: 'Abbey Road', artist: 'The Beatles', year: 1969 },
                { title: 'Thriller', artist: 'Michael Jackson', year: 1982 },
            ];

            const keys = arrayAlgorithm.keys(albums);

            expect([...keys]).toEqual([0, 1, 2]);
        });

        test('values', () => {
            type Country = {
                name: string;
                population: number;
            };

            const countries: Country[] = [
                { name: 'China', population: 1393000000 },
                { name: 'India', population: 1366000000 },
                { name: 'United States', population: 331000000 },
            ];

            const values = arrayAlgorithm.values(countries);

            expect([...values]).toEqual([countries[0], countries[1], countries[2]]);
        });

        describe('from', () => {
            test('creates a new array from an array-like object', () => {
                const arrayLike = { length: 3, 0: 'a', 1: 'b', 2: 'c' };
                const newArray = arrayAlgorithm.from(arrayLike);

                expect(newArray).toEqual(['a', 'b', 'c']);
            });

            test('creates a new array from an iterable object', () => {
                const iterable = new Set(['a', 'b', 'c']);
                const newArray = arrayAlgorithm.from(iterable);

                expect(newArray).toEqual(['a', 'b', 'c']);
            });

            test('creates a new array from a string', () => {
                const string = 'abc';
                const newArray = arrayAlgorithm.from(string);

                expect(newArray).toEqual(['a', 'b', 'c']);
            });
        });

        test('of', () => {
            type Flower = {
                name: string;
                color: string;
            };

            const rose: Flower = { name: 'Rose', color: 'Red' };
            const sunflower: Flower = { name: 'Sunflower', color: 'Yellow' };
            const tulip: Flower = { name: 'Tulip', color: 'Pink' };

            const newArray = arrayAlgorithm.of(rose, sunflower, tulip);

            expect(newArray).toEqual([rose, sunflower, tulip]);
        });
    });
});
