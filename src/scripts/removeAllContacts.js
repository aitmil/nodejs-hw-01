import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    const contacts = [];

    await fs.writeFile(
      PATH_DB,
      JSON.stringify(contacts, undefined, 2),
      'utf-8',
    );

    console.log('Successfully removed all contacts');
  } catch (error) {
    console.log(error);
  }
};

removeAllContacts();
