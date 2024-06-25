import { BaseAlgorithm } from './baseAlgorithm';

/**
 * ListNode
 *
 * Holds the value and the next and previous nodes in the list.
 */
class ListNode<T> {
    constructor(
        public value: T,
        public next: ListNode<T> | null = null,
        public prev: ListNode<T> | null = null,
    ) {}
}

/**
 * Doubly Linked List
 *
 * It implements a doubly linked list data structure with methods to insert at beginning, insert at end,
 * delete from beginning, delete from end, delete a specific node, search for a value, traverse the list,
 * get the size of the list, and get the head and tail of the list.
 */
export class DoublyLinkedListAlgorithm<T> extends BaseAlgorithm {
    private head: ListNode<T> | null = null;
    private tail: ListNode<T> | null = null;
    private size: number = 0;

    /**
     * Inserts a node at the beginning of the list.
     *
     * @param value The value to be inserted.
     */
    public insertAtBeginning(value: T): void {
        const newNode = new ListNode(value, this.head);
        if (this.head) {
            this.head.prev = newNode;
        }
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
        this.size++;
    }

    /**
     * Inserts a node at the end of the list.
     *
     * @param value The value to be inserted.
     */
    public insertAtEnd(value: T): void {
        const newNode = new ListNode(value, null, this.tail);
        if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        if (!this.head) {
            this.head = newNode;
        }
        this.size++;
    }

    /**
     * Deletes a node from the beginning of the list.
     */
    public deleteFromBeginning(): void {
        if (!this.head) return;
        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            }
        }
        this.size--;
    }

    /**
     * Deletes a node from the end of the list.
     */
    public deleteFromEnd(): void {
        if (!this.tail) return;
        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.tail = this.tail.prev;
            if (this.tail) {
                this.tail.next = null;
            }
        }
        this.size--;
    }

    /**
     * Deletes a node with a specific value.
     *
     * @param value The value of the node to be deleted.
     */
    public deleteNode(value: T): void {
        let current = this.head;
        while (current && current.value !== value) {
            current = current.next;
        }
        if (current) {
            if (current.prev) {
                current.prev.next = current.next;
            }
            if (current.next) {
                current.next.prev = current.prev;
            }
            if (current === this.head) {
                this.head = current.next;
            }
            if (current === this.tail) {
                this.tail = current.prev;
            }
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

    /**
     * Returns the tail node of the list.
     *
     * @returns The tail node of the list.
     */
    public getTail(): ListNode<T> | null {
        return this.tail;
    }
}
