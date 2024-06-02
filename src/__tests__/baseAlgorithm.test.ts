import fs from 'fs';
import path from 'path';
import { ArrayAlgorithm } from '../algorithms/array.algo';

describe('SampleAlgorithm', () => {
    let sampleAlgorithm: ArrayAlgorithm;

    beforeEach(() => {
        sampleAlgorithm = new ArrayAlgorithm();
    });

    test('description should list methods and indicate if they are tested', () => {
        const description = sampleAlgorithm.description();
        expect(description).toContain('◆ Array');
        expect(description).toContain('★ push ✓');
        expect(description).toContain('★ pop ✓');
    });

    test('testExistsForMethod should return true if method is tested (test)', () => {
        const method = 'push';
        const testFilePath = path.join(
            __dirname,
            `../../src/__tests__/samplealgo.algo.test.ts`,
        );

        // Create a temporary test file with the method test
        const testContent = `
            describe('SampleAlgorithm', () => {
                test('${method}', () => {
                    // test content
                });
            });
        `;
        fs.writeFileSync(testFilePath, testContent);

        // Check if testExistsForMethod correctly identifies the test
        expect(sampleAlgorithm['testExistsForMethod'](method)).toBe(true);

        // Clean up the test file
        fs.unlinkSync(testFilePath);
    });

    test('testExistsForMethod should return true if method is tested (describe)', () => {
        const method = 'push';
        const testFilePath = path.join(
            __dirname,
            `../../src/__tests__/samplealgo.algo.test.ts`,
        );

        // Create a temporary test file with the method test
        const testContent = `
            describe('${method}', () => {
                test('subTest', () => {
                    // test content
                });
            });
        `;
        fs.writeFileSync(testFilePath, testContent);

        // Check if testExistsForMethod correctly identifies the test
        expect(sampleAlgorithm['testExistsForMethod'](method)).toBe(true);

        // Clean up the test file
        fs.unlinkSync(testFilePath);
    });

    test('testExistsForMethod should return false if method is not tested', () => {
        const method = 'method2';
        const testFilePath = path.join(
            __dirname,
            `../../src/__tests__/samplealgo.algo.test.ts`,
        );

        // Ensure the test file does not contain the method test
        const testContent = `
            describe('SampleAlgorithm', () => {
                // No tests for method2
            });
        `;
        fs.writeFileSync(testFilePath, testContent);

        // Check if testExistsForMethod correctly identifies the absence of the test
        expect(sampleAlgorithm['testExistsForMethod'](method)).toBe(false);

        // Clean up the test file
        fs.unlinkSync(testFilePath);
    });
});
