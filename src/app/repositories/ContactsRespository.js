/* eslint-disable import/no-extraneous-dependencies */
const { v4 } = require('uuid');

// mock de cadastro de contatos sem banco de dados
let contacts = [
  {
    id: v4(),
    name: 'Jhonathan',
    email: 'jhonsmith@gmail.com',
    phone: '1212121212',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Jhonathan amaral',
    email: 'jhonsmisadasdsth@gmail.com',
    phone: '1212121212',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }

  findByEmail(email) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.email === email));
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  // Recebemos os item que veio da nossa controller e criamos o nosso contato

  create({
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      };
      contacts.push(newContact);
      resolve(newContact);
    });
  }
}

module.exports = new ContactsRepository();
