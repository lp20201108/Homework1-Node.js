const fs = require("fs");
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");
// console.log("contactPath", contactsPath);
// const contactsPath = `${__dirname}/db/contacts.json`;

function listContacts() {
  fs.readFile(contactsPath, "utf8", (error, data) => {
    if (error) {
      return console.log(error);
    }
    const contacts = JSON.parse(data);
    console.log("My contacts list");
    console.table(contacts);
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
        return console.log(`Contact found by ID:`, contact);
      }
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
    console.log("Updated contact list");
    console.table(contactsList);
  });
}

function addContact(name, email, phone) {
  fs.readFile(contactsPath, "utf8", (error, data) => {
    if (error) {
      return console.error(error);
    }
    const contacts = JSON.parse(data);
    // const newContact = {
    //   " id": contacts.length + 1,
    //   " name": name,
    //   " phone": phone,
    //   " email": email,
    // };
    contacts.push({
      id: contacts.length + 1,
      name: name,
      email: email,
      phone: phone,
    });

    fs.writeFile(contactsPath, JSON.stringify(contacts), (error, data) => {
      if (error) {
        return console.log(error);
      }
      console.log("The list was updated!");
      console.table(contacts);
    });
  });
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
