import { BaseAlgorithm } from './baseAlgorithm';

export class ArrayAlgorithm extends BaseAlgorithm {
    /**
     * Mutator Methods
     *
     * Mutator methods modify the array in place, altering its contents directly.
     */
    public push<T>(arr: Array<T>, elem: T): Array<T> {
        arr.push(elem);
        return arr;
    }

    public pop(): void {

    }

    public shift(): void {

    }

    public unshift(): void {

    }

    public splice(): void {

    }

    public reverse(): void {

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