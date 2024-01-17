// Aqui encontramos toda a regra de negocio da nossa API
// eslint-disable-next-line quotes
const ContactsRepository = require("../repositories/ContactsRespository");

class ContactController {
  async index(request, response) {
    const { orderBy } = request.query;

    // Listar todos os registros
    const contacts = await ContactsRepository.findAll(orderBy);
    response.json(contacts);
  }

  async show(request, response) {
    // Obter um registro
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);
    if (!contact) {
      // 404: Not Found
      // eslint-disable-next-line quotes
      return response.status(404).json({ error: "User not found" });
    }

    response.json(contact);
  }

  async store(request, response) {
    // Criar novo registro
    const { name, email, phone, category_id } = request.body;
    if (!name) {
      return response.status(400).json({ error: "name is required" });
    }

    // Verifica se existe um contato com o email fornecido
    const contactExixts = await ContactsRepository.findByEmail(email);
    // Caso exista retorna um status 400 com a mensagen de erro
    if (contactExixts) {
      return response
        .status(400)
        .json({ error: "This e-mail is already in use" });
    }
    // Se nao existir conticua com a criação do contato
    const contact = await ContactsRepository.create({
      name,
      email,
      phone,
      category_id,
    });
    // Retornamos o contato cadastrado em json
    response.json(contact);
  }

  async update(request, response) {
    // Editar um registro
    const { id } = request.params;
    const { name, email, phone, category_id } = request.body;
    // Busca o contato para poder edital
    const contactExists = await ContactsRepository.findById(id);
    if (!contactExists) {
      return response.status(404).json({ error: "User not found" });
    }

    if (!name) {
      return response.status(400).json({ error: "name is required" });
    }
    const contactByEmail = await ContactsRepository.findByEmail(email);
    if (contactByEmail && contactByEmail.id !== id) {
      return response
        .status(400)
        .json({ error: "This e-mail is already in use" });
    }
    const contact = await ContactsRepository.update(id, {
      name,
      email,
      phone,
      category_id,
    });

    return contact;
  }

  async delete(request, response) {
    // Deletar um registro
    const { id } = request.params;

    await ContactsRepository.delete(id);

    // 204: No Content
    response.sendStatus(204);
  }
}

// Singleton onde so podemos usar uma instância desta classe
module.exports = new ContactController();
