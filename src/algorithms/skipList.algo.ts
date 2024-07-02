import { BaseAlgorithm } from './baseAlgorithm';

/**
 * Represents a node in the Skip List.
 * Each node contains a value, a level, and an array of next nodes.
 */
class SkipListNode<T> {
    public next: SkipListNode<T>[] = [];
    constructor(
        public value: T,
        public level: number,
    ) {}
}

/**
 * Implements a Skip List data structure and provides methods for inserting, searching, and deleting nodes.
 * It also provides a method to get the size of the list.
 */
export class SkipListAlgorithm<T> extends BaseAlgorithm {
    // The first node in the list.
    private readonly head: SkipListNode<T>;

    // The maximum level that any node in the list can have.
    private readonly maxLevel: number;

    // The number of nodes in the list.
    private size: number;

    /**
     * Creates a new Skip List.
     *
     * @param maxLevel The maximum level that any node in the list can have
     */
    constructor(maxLevel: number = 16) {
        super();
        this.maxLevel = maxLevel;
        this.size = 0;
        this.head = new SkipListNode<T>(null as unknown as T, maxLevel);
    }

    /**
     * Generates a random level for a new node.
     *
     * @returns The generated level.
     */
    private randomLevel(): number {
        let level = 1;
        while (Math.random() < 0.5 && level < this.maxLevel) {
            level++;
        }
        return level;
    }

    /**
     * Creates an array of nodes to be updated during the insert or delete operation.
     *
     * @returns The array of nodes to be updated.
     */
    private createUpdateList(): SkipListNode<T>[] {
        return new Array(this.maxLevel).fill(this.head);
    }

    /**
     * Inserts a new node with the specified value into the list.
     *
     * @param value The value to be inserted.
     */
    public insert(value: T): void {
        // Create an update list to keep track of the nodes that need to be updated
        const update: SkipListNode<T>[] = this.createUpdateList();
        let current: SkipListNode<T> = this.head;

        // Traverse the skip list from the top level down to the bottom level
        for (let i = this.maxLevel - 1; i >= 0; i--) {
            // Move forward in the current level as long as the next node's value is less than the value to be inserted
            while (current.next[i] && current.next[i].value < value) {
                current = current.next[i];
            }
            // Store the current node in the update list
            update[i] = current;
        }

        // Determine the level of the new node to be inserted
        const level = this.randomLevel();
        const newNode = new SkipListNode(value, level);

        // Insert the new node at the appropriate positions in the skip list
        for (let i = 0; i < level; i++) {
            newNode.next[i] = update[i].next[i];
            update[i].next[i] = newNode;
        }

        // Increment the size of the skip list
        this.size++;
    }

    /**
     * Searches for a node with the specified value.
     *
     * @param value The value to be searched for.
     * @returns The node with the specified value, or null if not found.
     */
    public search(value: T): SkipListNode<T> | null {
        let current = this.head;

        for (let i = this.maxLevel - 1; i >= 0; i--) {
            while (current.next[i] && current.next[i].value < value) {
                current = current.next[i];
            }
        }

        current = current.next[0];
        return current && current.value === value ? current : null;
    }

    /**
     * Deletes a node with the specified value.
     *
     * @param value The value of the node to be deleted.
     * @returns True if the node was deleted, otherwise false.
     */
    public delete(value: T): boolean {
        let current: SkipListNode<T> = this.head;
        const update: SkipListNode<T>[] = this.createUpdateList();

        for (let i = this.maxLevel - 1; i >= 0; i--) {
            while (current.next[i] && current.next[i].value < value) {
                current = current.next[i];
            }
            update[i] = current;
        }

        current = current.next[0];
        if (current && current.value === value) {
            for (let i = 0; i < current.level; i++) {
                if (update[i].next[i] !== current) {
                    break;
                }
                update[i].next[i] = current.next[i];
            }
            this.size--;
            return true;
        }
        return false;
    }

    /**
     * Returns the number of nodes in the list.
     *
     * @returns The size of the list.
     */
    public getSize(): number {
        return this.size;
    }
}
