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

    public toString(): void {}

    /**
     * Iteration Methods
     *
     * Iteration methods process each element of an array in some manner, usually returning a new value or array based on the original array.
     */
    public forEach(): void {}

    public map(): void {}

    public filter(): void {}

    public reduce(): void {}

    public reduceRight(): void {}

    public some(): void {}

    public every(): void {}

    public find(): void {}

    public findIndex(): void {}
}
