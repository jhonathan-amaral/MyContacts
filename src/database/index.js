/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable quotes */
const { Client } = require("pg");

// para realizar a conexao precisamos instalar o client do pg e criar uma instacia com os dados dele

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "root",
  password: "root",
  database: "mycontacts",
});

client.connect();

// exportamos nossa query para conseguirmos trabalhar com nossa query dentro do nosso repository

exports.query = async (query) => {
  const { rows } = await client.query(query);
  return rows;
};

client
  .query("SELECT * FROM contacts;")
  .then((result) => console.log(result.rows));
