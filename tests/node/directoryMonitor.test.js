import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { monitorDirectory } from '../../src/node/directoryMonitor.js';
import fs from 'fs'; // Importamos fs

describe('monitorDirectory', () => {
  const mockFiles = [
    { name: 'file1.txt', size: 1024 },
    { name: 'file2.jpg', size: 2048 },
  ];

  const mockDirPath = '/mock/test';

  beforeEach(() => {
    // Usamos spyOn para mockear las funciones específicas
    vi.spyOn(fs.promises, 'readdir').mockResolvedValue(
      mockFiles.map(file => ({
        name: file.name,
        isFile: () => true,
      }))
    );

    vi.spyOn(fs.promises, 'stat').mockImplementation(async (filePath) => {
      const fileName = filePath.split('/').pop();
      const file = mockFiles.find(file => file.name === fileName);
      if (file) {
        return { size: file.size };
      }
      throw new Error('Archivo no encontrado');
    });
  });

  afterEach(() => {
    vi.restoreAllMocks(); // Restablecer mocks después de cada prueba
  });

  it('debería listar los archivos y calcular el tamaño total', async () => {
    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    await monitorDirectory(mockDirPath);

    // Verificar que se han llamado a las funciones adecuadas
    expect(fs.promises.readdir).toHaveBeenCalledWith(mockDirPath, { withFileTypes: true });
    expect(fs.promises.stat).toHaveBeenCalledTimes(mockFiles.length);
    expect(logSpy).toHaveBeenCalledWith(`Archivos en ${mockDirPath}:`);
    expect(logSpy).toHaveBeenCalledWith(`- file1.txt: 1024 bytes`);
    expect(logSpy).toHaveBeenCalledWith(`- file2.jpg: 2048 bytes`);
    expect(logSpy).toHaveBeenCalledWith(`Tamaño total: 3072 bytes (0.00 MB)`);

    logSpy.mockRestore();
  });

  it('debería manejar errores de lectura del directorio', async () => {
    vi.spyOn(fs.promises, 'readdir').mockRejectedValue(new Error('Error al leer el directorio'));
  
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
  
    await monitorDirectory(mockDirPath);
  
    // Actualizamos la expectativa para que coincida con el mensaje completo
    expect(errorSpy).toHaveBeenCalledWith(expect.stringContaining('Error al monitorear el directorio:'));
  
    errorSpy.mockRestore();
  });
  
  it('debería manejar errores en la función stat cuando el archivo no existe', async () => {
    vi.spyOn(fs.promises, 'stat').mockRejectedValue(new Error('Archivo no encontrado'));
  
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
  
    await monitorDirectory(mockDirPath);
  
    // Aquí también actualizamos la expectativa para que coincida con el nuevo mensaje
    expect(errorSpy).toHaveBeenCalledWith(expect.stringContaining('Error al monitorear el directorio: Archivo no encontrado'));
  
    errorSpy.mockRestore();
  });
  
});
