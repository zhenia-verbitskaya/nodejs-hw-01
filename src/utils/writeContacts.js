import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, undefined, 2), {
      encoding: 'utf-8',
    });
    console.log('Data was successfully written');
  } catch (error) {
    console.error('Error writing into the file:', error);
  }
};
