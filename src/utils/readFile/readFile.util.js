import fsPromises from 'fs/promises';
import path from 'path';

export const readFile = async (link) => {
  const filePath = path.join(process.cwd(), link);
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return objectData;
};
