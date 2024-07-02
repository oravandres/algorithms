import { BaseAlgorithm } from './baseAlgorithm';

/**
 * Represents a hash table data structure and provides methods for inserting, searching, deleting, and checking the existence of key-value pairs.
 * It also provides methods to get the size of the hash table and to clear the hash table.
 */
export class HashTableAlgorithm<K, V> extends BaseAlgorithm {
    // The hash table, represented as an object where the keys are hashes of the actual keys and the values are arrays containing the actual key and value.
    private table: { [key: string]: [K, V] } = {};

    // The number of key-value pairs in the hash table.
    private size: number = 0;

    /**
     * Generates a hash for a given key.
     * The hash is a string representation of the key.
     *
     * @param key The key to be hashed.
     * @returns The hash of the key.
     */
    private hash(key: K): string {
        return JSON.stringify(key);
    }

    /**
     * Inserts a key-value pair into the hash table.
     * If the key already exists in the hash table, its value is updated.
     *
     * @param key The key of the key-value pair to be inserted.
     * @param value The value of the key-value pair to be inserted.
     */
    public set(key: K, value: V): void {
        const hashKey = this.hash(key);
        if (!this.table.hasOwnProperty(hashKey)) {
            this.size++;
        }
        this.table[hashKey] = [key, value];
    }

    /**
     * Retrieves the value for a given key.
     *
     * @param key The key whose value is to be retrieved.
     * @returns The value associated with the key, or undefined if the key does not exist in the hash table.
     */
    public get(key: K): V | undefined {
        const hashKey = this.hash(key);
        return this.table[hashKey]?.[1];
    }

    /**
     * Deletes a key-value pair from the hash table.
     *
     * @param key The key of the key-value pair to be deleted.
     * @returns True if the key-value pair was deleted, otherwise false.
     */
    public delete(key: K): boolean {
        const hashKey = this.hash(key);
        if (this.table.hasOwnProperty(hashKey)) {
            delete this.table[hashKey];
            this.size--;
            return true;
        }
        return false;
    }

    /**
     * Checks if the hash table contains a given key.
     *
     * @param key The key to be checked.
     * @returns True if the key exists in the hash table, otherwise false.
     */
    public has(key: K): boolean {
        const hashKey = this.hash(key);
        return this.table.hasOwnProperty(hashKey);
    }

    /**
     * Returns the number of key-value pairs in the hash table.
     *
     * @returns The size of the hash table.
     */
    public getSize(): number {
        return this.size;
    }

    /**
     * Clears the hash table by removing all key-value pairs.
     */
    public clear(): void {
        this.table = {};
        this.size = 0;
    }
}
