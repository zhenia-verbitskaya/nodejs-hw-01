import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const currentContacts = (await readContacts()) || [];
    const newContact = createFakeContact();
    const updatedContacts = [...currentContacts, newContact];
    await writeContacts(updatedContacts);
    console.log('A new contact was added');
  } catch (error) {
    console.error('Error adding a new contact:', error);
  }
};

addOneContact();
