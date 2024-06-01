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

    public sort(): void {

    }

    /**
     * Accessor Methods
     *
     * Accessor methods do not modify the original array but return some derived or specific value based on the array's content.
     */
    public concat(): void {

    }

    public slice(): void {

    }

    public indexOf(): void {

    }

    public lastIndexOf(): void {

    }

    public includes(): void {

    }

    public join(): void {

    }

    public toString(): void {

    }

    /**
     * Iteration Methods
     *
     * Iteration methods process each element of an array in some manner, usually returning a new value or array based on the original array.
     */
    public forEach(): void {

    }

    public map(): void {

    }

    public filter(): void {

    }

    public reduce(): void {

    }

    public reduceRight(): void {

    }

    public some(): void {

    }

    public every(): void {

    }


    public find(): void {

    }

    public findIndex(): void {

    }
}