import { BaseAlgorithm } from './baseAlgorithm';

/**
 * Stack class implements a stack data structure with methods to push, pop, peek, check if it's empty and get its size.
 */
export class StackAlgorithm<T> extends BaseAlgorithm {
    // An array to hold the items in the stack.
    private items: T[] = [];

    /**
     * Adds an element to the top of the stack.
     *
     * @param element The element to be added to the stack.
     */
    public push(element: T): void {
        this.items.push(element);
    }

    /**
     * Removes and returns the top element from the stack.
     *
     * @returns The removed top element, or undefined if the stack is empty.
     */
    public pop(): T | undefined {
        return this.items.pop();
    }

    /**
     * Returns the top element of the stack without removing it.
     *
     * @returns The top element of the stack, or undefined if the stack is empty.
     */
    public peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    /**
     * Checks if the stack is empty.
     *
     * @returns True if the stack is empty, otherwise false.
     */
    public isEmpty(): boolean {
        return this.items.length === 0;
    }

    /**
     * Returns the number of elements in the stack.
     *
     * @returns The number of elements in the stack.
     */
    public size(): number {
        return this.items.length;
    }
}
