import { StackAlgorithm } from '../algorithms/stack.algo';

describe('Stack', () => {
    let stack: StackAlgorithm<number>;

    beforeEach(() => {
        stack = new StackAlgorithm<number>();
    });

    test('push', () => {
        stack.push(1);
        expect(stack.peek()).toBe(1);
    });

    test('pop', () => {
        expect(stack.pop()).toBeUndefined();

        stack.push(1);
        stack.push(2);

        expect(stack.pop()).toBe(2);
        expect(stack.peek()).toBe(1);
    });

    test('peek', () => {
        expect(stack.peek()).toBeUndefined();

        stack.push(1);
        stack.push(2);

        expect(stack.peek()).toBe(2);
    });

    test('isEmpty', () => {
        expect(stack.isEmpty()).toBe(true);

        stack.push(1);
        expect(stack.isEmpty()).toBe(false);
    });

    test('size', () => {
        expect(stack.size()).toBe(0);
        stack.push(1);

        expect(stack.size()).toBe(1);

        stack.push(2);
        expect(stack.size()).toBe(2);
    });
});
