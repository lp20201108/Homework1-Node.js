const fs = require("fs");
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");
console.log("contactPath", contactsPath);
// const contactsPath = `${__dirname}/db/contacts.json`;

function listContacts() {
  fs.readFile(contactsPath, "utf8", (error, data) => {
    if (error) {
      return console.log(error);
    }
    const contacts = JSON.parse(data);
    console.log("My contacts: ", contacts);
  });
}

function getContactById(contactId) {
  fs.readFile(contactsPath, "utf8", (error, data) => {
    if (error) {
      return console.error(error);
    }

    const contacts = JSON.parse(data);
    const myContact = contacts.find((contact) => {
      if (contact.id === contactId) {
        console.log(`Contact found by ID:`, myContact);
      }
      console.log("Contact not found!");
    });
  });
}

function removeContact(contactId) {
  fs.readFile(contactsPath, "utf8", (error, data) => {
    if (error) {
      return console.error(error);
    }
    const contacts = JSON.parse(data);
    const contactsList = contacts.filter((contact) => contact.id !== contactId);
    console.log("Updated contact list:", contactList);
  });
}

function addContact(name, email, phone) {
  fs.readFile(contactsPath, "utf8", (error, data) => {
    if (error) {
      return console.error(error);
    }
    const contacts = JSON.parse(data);
    const newContact = {
      id: contacts.lenght + 1,
      " name": name,
      " phone": phone,
    };
    contacts.push(newContact);
    console.log(`${newContact} was added to your contact list.
     Updated contas list: ${contacts}`);
    fs.writeFile(contactsPath, JSON.stringify(contacts), (error) => {
      if (error) {
        return console.log(error);
      }
      console.log("The list was updated!");
    });
  });
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
