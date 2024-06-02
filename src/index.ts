import fs from 'fs';
import path from 'path';

const algorithmsDir = path.join(__dirname, 'algorithms');

fs.readdirSync(algorithmsDir).forEach(file => {
    if (file.endsWith('.js') && !file.endsWith('baseAlgorithm.js')) {
        const filePath = path.join(algorithmsDir, file);

        import(filePath).then(module => {
            const className = Object.keys(module)[0];
            const AlgorithmClass = module[className];
            const algorithmInstance = new AlgorithmClass();

            if (typeof algorithmInstance.description === 'function') {
                console.log(algorithmInstance.description());
            }
        }).catch(err => console.error(err));
    }
});
