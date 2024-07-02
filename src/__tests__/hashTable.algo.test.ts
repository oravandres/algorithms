import { HashTableAlgorithm } from '../algorithms/hashTable.algo';

describe('HashTable', () => {
    let hashTable: HashTableAlgorithm<string, number>;

    beforeEach(() => {
        hashTable = new HashTableAlgorithm<string, number>();
    });

    test('set', () => {
        hashTable.set('key1', 1);
        expect(hashTable.getSize()).toBe(1);
    });

    test('get', () => {
        hashTable.set('key1', 1);
        const value = hashTable.get('key1');

        expect(value).toBe(1);
    });

    test('delete', () => {
        hashTable.set('key1', 1);
        const result = hashTable.delete('key1');

        expect(result).toBe(true);
        expect(hashTable.getSize()).toBe(0);
    });

    test('has', () => {
        hashTable.set('key1', 1);

        const result = hashTable.has('key1');
        expect(result).toBe(true);
    });

    test('getSize', () => {
        hashTable.set('key1', 1);
        hashTable.set('key2', 2);

        expect(hashTable.getSize()).toBe(2);
    });

    test('clear', () => {
        hashTable.set('key1', 1);
        hashTable.set('key2', 2);
        hashTable.clear();

        expect(hashTable.getSize()).toBe(0);
    });
});
