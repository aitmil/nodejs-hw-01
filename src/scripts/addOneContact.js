import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    let contacts = JSON.parse(data);

    const newContact = createFakeContact();
    const addedContact = contacts.push(newContact);

    await fs.writeFile(
      PATH_DB,
      JSON.stringify(contacts, undefined, 2),
      'utf-8',
    );

    console.log(`Successfully added ${addedContact} contact`);
  } catch (error) {
    console.log(error);
  }
};

addOneContact();
