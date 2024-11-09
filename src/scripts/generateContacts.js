import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const currentContacts = (await readContacts()) || [];
    const newContacts = Array.from({ length: number }, () =>
      createFakeContact(),
    );
    const updateContacts = [...currentContacts, ...newContacts];
    await writeContacts(updateContacts);
    console.log(`Added ${number} new contact(s)`);
  } catch (error) {
    console.error('Error adding contacts:', error);
  }
};

generateContacts(5);
