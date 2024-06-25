import { SinglyLinkedListAlgorithm } from '../algorithms/singlyLinkedList.algo';

describe('SinglyLinkedList', () => {
    let list: SinglyLinkedListAlgorithm<number>;

    beforeEach(() => {
        list = new SinglyLinkedListAlgorithm<number>();
    });

    test('insertAtBeginning', () => {
        list.insertAtBeginning(1);

        expect(list.getHead()?.value).toBe(1);
        expect(list.getSize()).toBe(1);
    });

    test('insertAtEnd', () => {
        list.insertAtEnd(1);
        list.insertAtEnd(2);

        expect(list.getHead()?.next?.value).toBe(2);
        expect(list.getSize()).toBe(2);
    });

    test('deleteFromBeginning', () => {
        list.insertAtEnd(1);
        list.insertAtEnd(2);
        list.deleteFromBeginning();

        expect(list.getHead()?.value).toBe(2);
        expect(list.getSize()).toBe(1);
    });

    test('deleteFromEnd', () => {
        list.insertAtEnd(1);
        list.insertAtEnd(2);
        list.deleteFromEnd();

        expect(list.getHead()?.next).toBe(null);
        expect(list.getSize()).toBe(1);
    });

    test('deleteNode', () => {
        list.insertAtEnd(1);
        list.insertAtEnd(2);
        list.insertAtEnd(3);
        list.deleteNode(2);

        expect(list.getHead()?.next?.value).toBe(3);
        expect(list.getSize()).toBe(2);
    });

    test('search', () => {
        list.insertAtEnd(1);
        list.insertAtEnd(2);

        const foundNode = list.search(2);
        expect(foundNode?.value).toBe(2);
    });

    test('traverse', () => {
        list.insertAtEnd(1);
        list.insertAtEnd(2);

        const values: number[] = [];
        list.traverse((value) => values.push(value));

        expect(values).toEqual([1, 2]);
    });

    test('getSize', () => {
        expect(list.getSize()).toBe(0);

        list.insertAtEnd(1);
        expect(list.getSize()).toBe(1);
    });

    test('getHead', () => {
        expect(list.getHead()).toBe(null);

        list.insertAtEnd(1);
        expect(list.getHead()?.value).toBe(1);
    });
});
