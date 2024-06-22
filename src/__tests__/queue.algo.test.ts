import { QueueAlgorithm } from '../algorithms/queue.algo';

describe('QueueAlgorithm', () => {
    let queue: QueueAlgorithm<number>;

    beforeEach(() => {
        queue = new QueueAlgorithm<number>();
    });

    test('enqueue', () => {
        queue.enqueue(1);
        expect(queue.peek()).toBe(1);
    });

    test('dequeue', () => {
        expect(queue.dequeue()).toBeUndefined();

        queue.enqueue(1);
        queue.enqueue(2);

        expect(queue.dequeue()).toBe(1);
        expect(queue.peek()).toBe(2);
    });

    test('peek', () => {
        expect(queue.peek()).toBeUndefined();

        queue.enqueue(1);
        queue.enqueue(2);

        expect(queue.peek()).toBe(1);
        expect(queue.size()).toBe(2);
    });

    test('isEmpty', () => {
        expect(queue.isEmpty()).toBe(true);

        queue.enqueue(1);
        expect(queue.isEmpty()).toBe(false);
    });

    test('size', () => {
        expect(queue.size()).toBe(0);

        queue.enqueue(1);
        expect(queue.size()).toBe(1);

        queue.enqueue(2);
        expect(queue.size()).toBe(2);
    });
});
