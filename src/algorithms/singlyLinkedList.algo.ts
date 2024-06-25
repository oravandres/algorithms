import { BaseAlgorithm } from './baseAlgorithm';

/**
 * ListNode
 *
 * Holds the value and the next node in the list.
 */
class ListNode<T> {
    constructor(
        public value: T,
        public next: ListNode<T> | null = null,
    ) {}
}

/**
 * Singly Linked List
 *
 * It implements a singly linked list data structure with methods to insert at beginning, insert at end,
 * delete from beginning, delete from end, delete a specific node, search for a value, traverse the list,
 * get the size of the list, and get the head of the list.
 */
export class SinglyLinkedListAlgorithm<T> extends BaseAlgorithm {
    private head: ListNode<T> | null = null;
    private size: number = 0;

    /**
     * Inserts a node at the beginning of the list.
     *
     * @param value The value to be inserted.
     */
    public insertAtBeginning(value: T): void {
        this.head = new ListNode(value, this.head);
        this.size++;
    }

    /**
     * Inserts a node at the end of the list.
     *
     * @param value The value to be inserted.
     */
    public insertAtEnd(value: T): void {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    /**
     * Deletes a node from the beginning of the list.
     */
    public deleteFromBeginning(): void {
        if (this.head) {
            this.head = this.head.next;
            this.size--;
        }
    }

    /**
     * Deletes a node from the end of the list.
     */
    public deleteFromEnd(): void {
        if (!this.head) return;
        if (!this.head.next) {
            this.head = null;
        } else {
            let current = this.head;
            while (current.next && current.next.next) {
                current = current.next;
            }
            current.next = null;
        }
        this.size--;
    }

    /**
     * Deletes a node with a specific value.
     *
     * @param value The value of the node to be deleted.
     */
    public deleteNode(value: T): void {
        if (!this.head) return;
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return;
        }
        let current: ListNode<T> | null = this.head;
        let previous: ListNode<T> | null = null;
        while (current && current.value !== value) {
            previous = current;
            current = current.next;
        }
        if (current && previous) {
            previous.next = current.next;
            this.size--;
        }
    }

    /**
     * Searches for a node with a specific value.
     *
     * @param value The value to be searched for.
     * @returns The node with the specified value, or null if not found.
     */
    public search(value: T): ListNode<T> | null {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    /**
     * Traverses all nodes in the list and applies a callback function on each node's value.
     *
     * @param callback The callback function to be applied on each node's value.
     */
    public traverse(callback: (value: T) => void): void {
        let current = this.head;
        while (current) {
            callback(current.value);
            current = current.next;
        }
    }

    /**
     * Returns the size of the list.
     *
     * @returns The size of the list.
     */
    public getSize(): number {
        return this.size;
    }

    /**
     * Returns the head node of the list.
     *
     * @returns The head node of the list.
     */
    public getHead(): ListNode<T> | null {
        return this.head;
    }
}
