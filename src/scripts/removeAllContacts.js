import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([]), {
      encoding: 'utf-8',
    });
    console.log('All contacts were successfully removed');
  } catch (error) {
    console.error('Error removing all contacts:', error);
  }
};

removeAllContacts();
