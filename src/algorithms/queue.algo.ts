import { BaseAlgorithm } from './baseAlgorithm';

/**
 * QueueAlgorithm class that extends the BaseAlgorithm class.
 * It implements a queue data structure with methods to enqueue, dequeue, peek, check if it's empty and get its size.
 */
export class QueueAlgorithm<T> extends BaseAlgorithm {
    // An array to hold the items in the queue.
    private items: T[] = [];

    /**
     * Adds an element to the end of the queue.
     *
     * @param element The element to be added to the queue.
     */
    enqueue(element: T): void {
        this.items.push(element);
    }

    /**
     * Removes and returns the front element from the queue.
     *
     * @returns The removed front element, or undefined if the queue is empty.
     */
    dequeue(): T | undefined {
        return this.items.shift();
    }

    /**
     * Returns the front element of the queue without removing it.
     *
     * @returns The front element of the queue, or undefined if the queue is empty.
     */
    peek(): T | undefined {
        return this.items[0];
    }

    /**
     * Checks if the queue is empty.
     *
     * @returns True if the queue is empty, otherwise false.
     */
    isEmpty(): boolean {
        return this.items.length === 0;
    }

    /**
     * Returns the number of elements in the queue.
     *
     * @returns The number of elements in the queue.
     */
    size(): number {
        return this.items.length;
    }
}
