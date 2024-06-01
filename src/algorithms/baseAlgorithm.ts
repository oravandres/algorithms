import fs from 'fs';
import path from 'path';

export abstract class BaseAlgorithm {
    public description(): string {
        const methodNames = Object.getOwnPropertyNames(Object.getPrototypeOf(this))
            .filter(method => method !== 'constructor' && typeof (this as any)[method] === 'function')
            .map(method => {
                const testExists = this.testExistsForMethod(method);
                return `  ★ ${method}${testExists ? ' ✓' : ''}`;
            })
            .join('\n');

        return `◆ ${this.constructor.name.replace('Algorithm', '')}\n${methodNames}`;
    }

    private testExistsForMethod(method: string): boolean {
        const className = this.constructor.name.replace('Algorithm', '').toLowerCase();
        const testFilePath = path.join(__dirname, `../../src/__tests__/${className}.algo.test.ts`);

        if (!fs.existsSync(testFilePath)) {
            return false;
        }

        const testFileContent = fs.readFileSync(testFilePath, 'utf-8');
        const methodRegex = new RegExp(`(test|describe)\\(['"\`]${method}['"\`],`);
        return methodRegex.test(testFileContent);
    }
}
