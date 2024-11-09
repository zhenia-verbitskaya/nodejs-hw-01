import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const contacts = JSON.parse(data);
    const contactCount = contacts.length;
    console.log('Number of contacts:', contactCount);
    return contactCount;
  } catch (error) {
    console.error('Error reading contacts:', error);
    return [];
  }
};

console.log(await countContacts());
