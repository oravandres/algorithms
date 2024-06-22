import { BaseAlgorithm } from './baseAlgorithm';

export class ArrayAlgorithm extends BaseAlgorithm {
    /**
     * Mutator Methods
     *
     * Mutator methods modify the array in place, altering its contents directly.
     */

    /**
     * Adds one or more elements to the end of an array
     *
     * @param arr - The array to which the element will be added.
     * @param elem - The element to be added to the array.
     * @returns The array with the new element added to the end.
     */
    public push<T>(arr: Array<T>, elem: T): Array<T> {
        arr.push(elem);
        return arr;
    }

    /**
     * Removes the last element from an array and returns the modified array and the removed element.
     *
     * @param arr - The array from which the last element will be removed.
     * @returns A tuple where the first element is the modified array and the second element is the removed element.
     */
    public pop<T>(arr: Array<T>): [Array<T>, T | undefined] {
        const removed = arr.pop();
        return [arr, removed];
    }

    /**
     * Removes the first element from an array and returns the modified array and the removed element.
     *
     * @param arr - The array from which the first element will be removed.
     * @returns A tuple where the first element is the modified array and the second element is the removed element.
     */
    public shift<T>(arr: Array<T>): [Array<T>, T | undefined] {
        const removed = arr.shift();
        return [arr, removed];
    }

    /**
     * Adds one or more elements to the beginning of an array and returns the modified array.
     *
     * @param arr - The array to which the element will be added.
     * @param elem - The element to be added to the beginning of the array.
     * @returns The array with the new element added to the beginning.
     */
    public unshift<T>(arr: Array<T>, elem: T): Array<T> {
        arr.unshift(elem);
        return arr;
    }

    /**
     * Changes the contents of an array by removing, replacing, or adding new elements at a specific index.
     *
     * @param arr - The array to be modified.
     * @param start - The index at which to start changing the array.
     * @param deleteCount - The number of elements in the array to remove from start.
     * @param items - The elements to add to the array, beginning from start. If you don't specify any elements, splice() will only remove elements from the array.
     * @returns The array with the new elements added, replaced, or removed.
     */
    public splice<T>(arr: Array<T>, start: number, deleteCount: number, ...items: T[]): Array<T> {
        arr.splice(start, deleteCount, ...items);
        return arr;
    }

    /**
     * Reverses the array in place
     *
     * @param arr - The array to be reversed.
     * @returns The reversed array.
     */
    public reverse<T>(arr: Array<T>): Array<T> {
        arr.reverse();
        return arr;
    }

    /**
     * Sorts the elements of an array in place
     *
     * @param arr - The array to be sorted.
     * @returns The sorted array.
     */
    public sort<T>(arr: Array<T>): Array<T> {
        arr.sort();
        return arr;
    }

    /**
     * Accessor Methods
     *
     * Accessor methods do not modify the original array but return some derived or specific value based on the array's content.
     */

    /**
     * Merges two or more arrays into a new array.
     *
     * @param arr - The initial array.
     * @param arrays - Additional arrays to be merged.
     * @returns A new array that contains all elements from the initial array and the additional arrays.
     */
    public concat<T>(arr: Array<T>, ...arrays: Array<Array<T>>): Array<T> {
        return arr.concat(...arrays);
    }

    /**
     * Returns a shallow copy of a portion of an array.
     *
     * @param arr - The array to be sliced.
     * @param start - The beginning index, inclusive.
     * @param end - The end index, exclusive.
     * @returns A new array that is a shallow copy of the specified portion of the original array.
     */
    public slice<T>(arr: Array<T>, start: number, end: number): Array<T> {
        return arr.slice(start, end);
    }

    /**
     * Returns the first index at which a given element can be found in the array.
     *
     * @param arr - The array in which to search for the element.
     * @param elem - The element to search for.
     * @param start - The index to start the search from. If not provided, the search starts from the beginning of the array.
     * @returns The first index at which the given element can be found in the array, or -1 if the element is not found.
     */
    public indexOf<T>(arr: Array<T>, elem: T, start?: number): number {
        return arr.indexOf(elem, start);
    }

    /**
     * Returns the last index at which a given element can be found in the array.
     * The array is searched backwards, starting from the 'start' index towards the beginning of the array.
     * If 'start' is undefined, the search starts from the end of the array.
     *
     * @param arr - The array in which to search for the element.
     * @param elem - The element to search for.
     * @param start - The index to start the search from. If not provided, the search starts from the end of the array.
     * @returns The last index at which the given element can be found in the array, or -1 if the element is not found.
     */
    public lastIndexOf<T>(arr: Array<T>, elem: T, start?: number): number {
        // If 'start' is undefined, set it to the last index of the array.
        // This is a workaround for a known issue in Node.js where passing 'undefined' as the 'start' parameter
        // to 'Array.prototype.lastIndexOf' starts the search from the beginning of the array instead of the end.
        if (start === undefined) {
            start = arr.length - 1;
        }

        return arr.lastIndexOf(elem, start);
    }

    /**
     * Determines whether an array includes a certain value, returning true or false as appropriate.
     *
     * @param arr - The array to search within.
     * @param elem - The value to search for.
     * @param start - The position in this array at which to begin searching for `elem`. If not provided, the search starts from the beginning of the array.
     * @returns A boolean indicating whether the given value exists in the array.
     */
    public includes<T>(arr: Array<T>, elem: T, start?: number): boolean {
        return arr.includes(elem, start);
    }

    /**
     * Joins all elements of an array into a string.
     *
     * @param arr - The array whose elements will be joined.
     * @param separator - The string used to separate each element of the array.
     * @returns A string representing the elements of the array separated by the specified separator.
     */
    public join<T>(arr: Array<T>, separator: string): string {
        return arr.join(separator);
    }

    /**
     * Converts an array to a string.
     *
     * @param arr - The array to be converted to a string.
     * @returns A string representation of the array. The array elements are converted to strings and concatenated with a comma (',') separator.
     */
    public toString<T>(arr: Array<T>): string {
        return arr.toString();
    }

    /**
     * Iteration Methods
     *
     * Iteration methods process each element of an array in some manner, usually returning a new value or array based on the original array.
     */

    /**
     * Executes a provided callback function once for each element in the given array.
     *
     * @param arr - The array of type `T` to be iterated over.
     * @param callback - A function that is executed for each element in the array.
     *                   This function takes three parameters:
     *                   1. The current element being processed in the array.
     *                   2. The index of the current element being processed.
     *                   3. The original array `arr`.
     *
     * This method does not return a value. Its primary use is to perform side effects
     * for each element in the array.
     */
    public forEach<T>(arr: Array<T>, callback: (value: T, index: number, arr: T[]) => void): void {
        arr.forEach(callback);
    }

    /**
     * Creates a new array with the results of calling a provided function on every element in the array.
     *
     * @param arr - The array of type `T` to be mapped over.
     * @param callback - A function that is executed for each element in the array.
     *                   This function takes three parameters:
     *                   1. The current element being processed in the array.
     *                   2. The index of the current element being processed.
     *                   3. The original array `arr`.
     *                   The function should return a new element of type `T` that will be included in the new array.
     * @returns A new array of type `T` that contains the results of applying the callback function to each element in the original array.
     */
    public map<T>(arr: Array<T>, callback: (value: T, index: number, arr: T[]) => T): Array<T> {
        return arr.map(callback);
    }

    /**
     * This method creates a new array that includes elements from the original array that pass a test.
     * The test is a callback function that is executed for each element in the array.
     * If the callback function returns true for an element, that element is included in the new array.
     * If the callback function returns false, the element is not included.
     *
     * @param arr - The original array.
     * @param callback - The test function that is executed for each element. It takes three parameters:
     *                   1. The current element being processed.
     *                   2. The index of the current element.
     *                   3. The original array.
     * @returns A new array containing only the elements that passed the test.
     */
    public filter<T>(arr: Array<T>, callback: (value: T, index: number, arr: T[]) => boolean): Array<T> {
        return arr.filter(callback);
    }

    /**
     * Executes a reducer function on each element of the array, resulting in a single output value.
     * The reducer function takes four arguments:
     * 1. Accumulator (acc): The accumulated value previously returned in the last invocation of the callback.
     * 2. Current Value (value): The current element being processed in the array.
     * 3. Current Index (index): The index of the current element being processed in the array.
     * 4. Source Array (arr): The array `reduce` was called upon.
     *
     * @param arr - The array of type `T` to be reduced.
     * @param callback - The reducer function that is executed for each element in the array. This function takes four parameters:
     *                   1. Accumulator (acc): The accumulated value previously returned in the last invocation of the callback.
     *                   2. Current Value (value): The current element being processed in the array.
     *                   3. Current Index (index): The index of the current element being processed in the array.
     *                   4. Source Array (arr): The array `reduce` was called upon.
     * @param initValue - The initial value to be used as the first argument to the first call of the callback. The type of this argument is `U`.
     * @returns The final accumulated value resulting from the reduction. The type of this return value is `U`.
     */
    public reduce<T, U>(arr: Array<T>, callback: (acc: U, value: T, index: number, arr: Array<T>) => U, initValue: U): U {
        return arr.reduce(callback, initValue);
    }

    /**
     * Executes a reducer function on each element of the array, starting from the end and moving towards the beginning, resulting in a single output value.
     * The reducer function takes four arguments:
     * 1. Accumulator (acc): The accumulated value previously returned in the last invocation of the callback.
     * 2. Current Value (value): The current element being processed in the array.
     * 3. Current Index (index): The index of the current element being processed in the array.
     * 4. Source Array (arr): The array `reduceRight` was called upon.
     *
     * @param arr - The array of type `T` to be reduced.
     * @param callback - The reducer function that is executed for each element in the array. This function takes four parameters:
     *                   1. Accumulator (acc): The accumulated value previously returned in the last invocation of the callback.
     *                   2. Current Value (value): The current element being processed in the array.
     *                   3. Current Index (index): The index of the current element being processed in the array.
     *                   4. Source Array (arr): The array `reduceRight` was called upon.
     * @param initValue - The initial value to be used as the first argument to the first call of the callback. The type of this argument is `U`.
     * @returns The final accumulated value resulting from the reduction. The type of this return value is `U`.
     */
    public reduceRight<T, U>(arr: Array<T>, callback: (acc: U, value: T, index: number, arr: Array<T>) => U, initValue: U): U {
        return arr.reduceRight(callback, initValue);
    }

    /**
     * Tests whether at least one element in the array passes the test implemented by the provided callback function.
     *
     * @param arr - The array of type `T` to be tested.
     * @param callback - A function that is executed for each element in the array. This function takes three parameters:
     *                   1. `value`: The current element being processed in the array.
     *                   2. `index`: The index of the current element being processed.
     *                   3. `arr`: The original array `some` was called upon.
     *                   The function should return a boolean value.
     * @returns A boolean value: `true` if the callback function returns a truthy value for at least one element in the array; otherwise, `false`.
     */
    public some<T>(arr: Array<T>, callback: (value: T, index: number, arr: Array<T>) => boolean): boolean {
        return arr.some(callback);
    }

    /**
     * Tests whether all elements in the array pass the test implemented by the provided callback function.
     *
     * @param arr - The array of type `T` to be tested.
     * @param callback - A function that is executed for each element in the array. This function takes three parameters:
     *                   1. `value`: The current element being processed in the array.
     *                   2. `index`: The index of the current element being processed.
     *                   3. `arr`: The original array `every` was called upon.
     *                   The function should return a boolean value.
     * @returns A boolean value: `true` if the callback function returns a truthy value for all elements in the array; otherwise, `false`.
     */
    public every<T>(arr: Array<T>, callback: (value: T, index: number, arr: Array<T>) => boolean): boolean {
        return arr.every(callback);
    }

    /**
     * Returns the first element in the array that satisfies the provided testing function.
     *
     * @param arr - The array of type `T` to be searched.
     * @param callback - A function that is executed for each element in the array until it finds one where it returns a truthy value. It takes three parameters:
     *                   1. `value`: The current element being processed in the array.
     *                   2. `index`: The index of the current element being processed.
     *                   3. `arr`: The original array `find` was called upon.
     *                   The function should return a boolean value.
     * @returns The first element in the array that satisfies the provided testing function. If no values satisfy the testing function, `undefined` is returned.
     */
    public find<T>(arr: Array<T>, callback: (value: T, index: number, arr: Array<T>) => boolean): T | undefined {
        return arr.find(callback);
    }

    /**
     * Returns the index of the first element in the array that satisfies the provided testing function.
     *
     * @param arr - The array of type `T` to be searched.
     * @param callback - A function that is executed for each element in the array until it finds one where it returns a truthy value. It takes three parameters:
     *                   1. `value`: The current element being processed in the array.
     *                   2. `index`: The index of the current element being processed.
     *                   3. `arr`: The original array `findIndex` was called upon.
     *                   The function should return a boolean value.
     * @returns The index of the first element in the array that satisfies the provided testing function. If no values satisfy the testing function, -1 is returned.
     */
    public findIndex<T>(arr: Array<T>, callback: (value: T, index: number, arr: Array<T>) => boolean): number {
        return arr.findIndex(callback);
    }

    /**
     * Other Methods
     */

    /**
     * Shallow copies part of an array to another location in the same array and returns it, without modifying its size.
     *
     * @param arr - The array of type `T` to be modified.
     * @param target - The index at which to copy the sequence to. If negative, it is treated as `arr.length + target`.
     * @param start - The index at which to start copying elements from. If negative, it is treated as `arr.length + start`. Default is 0.
     * @param end - The index at which to end copying elements from. If negative, it is treated as `arr.length + end`. Default is `arr.length`.
     * @returns The modified array with the copied elements.
     */
    public copyWithin<T>(arr: Array<T>, target: number, start: number = 0, end?: number): Array<T> {
        return arr.copyWithin(target, start, end);
    }

    /**
     * Fills a portion of an array with a static value, from the start index up to, but not including, the end index.
     *
     * @param arr - The array of type `T` to be filled.
     * @param value - The value to fill the array with.
     * @param start - The index to start filling at. If negative, it is treated as `arr.length + start`. Default is 0.
     * @param end - The index to stop filling at. If negative, it is treated as `arr.length + end`. Default is `arr.length`.
     * @returns The modified array with the specified portion filled with the given value.
     */
    public fill<T>(arr: Array<T>, value: T, start?: number, end?: number): Array<T> {
        return arr.fill(value, start, end);
    }

    /**
     * Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
     * Each entry's key is its index, and each entry's value is the element at that index.
     *
     * @param arr - The array of type `T` to create an iterator from.
     * @returns An iterable iterator that produces an array of `[index, value]` pairs for each entry in the array.
     */
    public entries<T>(arr: Array<T>): IterableIterator<[number, T]> {
        return arr.entries();
    }

    /**
     * Returns a new Array Iterator object that contains the keys (indices) for each index in the array.
     *
     * @param arr - The array of type `T` to create an iterator from.
     * @returns An iterable iterator that produces the keys (indices) for each entry in the array.
     */
    public keys<T>(arr: Array<T>): IterableIterator<number> {
        return arr.keys();
    }

    /**
     * Returns a new Array Iterator object that contains the values for each index in the array.
     *
     * @param arr - The array of type `T` to create an iterator from.
     * @returns An iterable iterator that produces the values for each entry in the array.
     */
    public values<T>(arr: Array<T>): IterableIterator<T> {
        return arr.values();
    }

    /**
     * Creates a new array instance from an array-like or iterable object.
     *
     * @param arrayLike - An array-like or iterable object to convert to an array.
     * @returns A new array instance.
     */
    public from<T>(arrayLike: ArrayLike<T> | Iterable<T>): Array<T> {
        return Array.from(arrayLike);
    }

    /**
     * Creates a new array instance with a variable number of elements.
     *
     * @param elements - Elements of which a new array will be created.
     * @returns A new array instance.
     */
    public of<T>(...elements: T[]): Array<T> {
        return Array.of(...elements);
    }
}
