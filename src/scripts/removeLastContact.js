import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const contacts = JSON.parse(data);

    if (contacts.length === 0) {
      console.log('No contacts to remove');
      return;
    }

    contacts.pop();

    await fs.writeFile('src/db/db.json', JSON.stringify(contacts, null, 2), {
      encoding: 'utf-8',
    });
    console.log('The last contact was successfully removed');
  } catch (error) {
    console.error('Error removing the last contact:', error);
  }
};

removeLastContact();
