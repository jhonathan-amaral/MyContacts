/* eslint-disable quotes */
/* eslint-disable import/no-extraneous-dependencies */
const { v4 } = require("uuid");

// mock de cadastro de contatos sem banco de dados
let contacts = [
  {
    id: v4(),
    name: "Jhonathan",
    email: "jhonsmith@gmail.com",
    phone: "1212121212",
    category_id: v4(),
  },
  {
    id: v4(),
    name: "Jhonathan amaral",
    email: "jhonsmisadasdsth@gmail.com",
    phone: "1212121212",
    category_id: v4(),
  },
];

const db = require("../../database");

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

  async create({ name, email, phone, category_id }) {
    const [row] = await db.query(
      `
    INSERT INTO contacts( name,email,phone,category_id)
    VALUES($1, $2, $3, $4)
    RETURNING *
    `,
      [name, email, phone, category_id]
    );
    return row;
  }
}

module.exports = new ContactsRepository();
