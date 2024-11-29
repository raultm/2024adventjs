import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

/**
 * Lista los archivos en un directorio y calcula su tamaño total.
 * @param {string} directoryPath - Ruta del directorio.
 * @returns {Promise<void>}
 */
export async function monitorDirectory(directoryPath) {
    try {
        const files = await fs.promises.readdir(directoryPath, { withFileTypes: true });

        let totalSize = 0;

        console.log(`Archivos en ${directoryPath}:`);
        for (const file of files) {
            if (file.isFile()) {
                const filePath = path.join(directoryPath, file.name);
                const stats = await fs.promises.stat(filePath);
                console.log(`- ${file.name}: ${stats.size} bytes`);
                totalSize += stats.size;
            }
        }

        console.log(`Tamaño total: ${totalSize} bytes (${(totalSize / (1024 ** 2)).toFixed(2)} MB)`);
    } catch (error) {
        console.error(`Error al monitorear el directorio: ${error.message}`);
    }
}

// Si quieres ejecutar directamente este script:
if (import.meta.url === `file://${process.argv[1]}`) {
    const directoryPath = process.argv[2] || '.';
    monitorDirectory(directoryPath);
}
