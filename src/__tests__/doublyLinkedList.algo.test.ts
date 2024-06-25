import { DoublyLinkedListAlgorithm } from '../algorithms/doublyLinkedList.algo';

describe('DoublyLinkedList', () => {
    let doublyLinkedList: DoublyLinkedListAlgorithm<number>;

    beforeEach(() => {
        doublyLinkedList = new DoublyLinkedListAlgorithm<number>();
    });

    test('insertAtBeginning', () => {
        doublyLinkedList.insertAtBeginning(1);

        expect(doublyLinkedList.getHead()?.value).toBe(1);
        expect(doublyLinkedList.getSize()).toBe(1);
    });

    test('insertAtEnd', () => {
        doublyLinkedList.insertAtEnd(1);
        doublyLinkedList.insertAtEnd(2);

        expect(doublyLinkedList.getTail()?.value).toBe(2);
        expect(doublyLinkedList.getSize()).toBe(2);
    });

    test('deleteFromBeginning', () => {
        doublyLinkedList.insertAtEnd(1);
        doublyLinkedList.insertAtEnd(2);
        doublyLinkedList.deleteFromBeginning();

        expect(doublyLinkedList.getHead()?.value).toBe(2);
        expect(doublyLinkedList.getSize()).toBe(1);
    });

    test('deleteFromEnd', () => {
        doublyLinkedList.insertAtEnd(1);
        doublyLinkedList.insertAtEnd(2);
        doublyLinkedList.deleteFromEnd();
        expect(doublyLinkedList.getTail()?.value).toBe(1);
        expect(doublyLinkedList.getSize()).toBe(1);
    });

    test('deleteNode', () => {
        doublyLinkedList.insertAtEnd(1);
        doublyLinkedList.insertAtEnd(2);
        doublyLinkedList.insertAtEnd(3);
        doublyLinkedList.deleteNode(2);

        expect(doublyLinkedList.getHead()?.next?.value).toBe(3);
        expect(doublyLinkedList.getSize()).toBe(2);
    });

    test('search', () => {
        doublyLinkedList.insertAtEnd(1);
        doublyLinkedList.insertAtEnd(2);

        const foundNode = doublyLinkedList.search(2);
        expect(foundNode?.value).toBe(2);
    });

    test('traverse', () => {
        doublyLinkedList.insertAtEnd(1);
        doublyLinkedList.insertAtEnd(2);

        const values: number[] = [];
        doublyLinkedList.traverse((value) => values.push(value));

        expect(values).toEqual([1, 2]);
    });

    test('getSize', () => {
        expect(doublyLinkedList.getSize()).toBe(0);

        doublyLinkedList.insertAtEnd(1);
        expect(doublyLinkedList.getSize()).toBe(1);
    });

    test('getHead', () => {
        expect(doublyLinkedList.getHead()).toBe(null);

        doublyLinkedList.insertAtEnd(1);
        expect(doublyLinkedList.getHead()?.value).toBe(1);
    });

    test('getTail', () => {
        expect(doublyLinkedList.getTail()).toBe(null);

        doublyLinkedList.insertAtEnd(1);
        expect(doublyLinkedList.getTail()?.value).toBe(1);
    });
});
