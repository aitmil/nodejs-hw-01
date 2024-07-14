import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    if (contacts.length === 0) {
      console.log('There are no contacts in collection.');
      return;
    }

    const removedContact = contacts.pop();

    await fs.writeFile(
      PATH_DB,
      JSON.stringify(contacts, undefined, 2),
      'utf-8',
    );

    console.log(`Successfully removed last (${removedContact.name}) contact`);
  } catch (error) {
    console.log(error);
  }
};

removeLastContact();
