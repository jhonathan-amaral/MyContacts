// Aqui encontramos toda a regra de negocio da nossa API
const ContactsRepository = require('../repositories/ContactsRespository');

class ContactController {
  async index(request, response) {
    // Listar todos os registros
    const contacts = await ContactsRepository.findAll();
    response.json(contacts);
  }

  async show(request, response) {
    // Obter um registro
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);
    if (!contact) {
      // 404: Not Found
      return response.status(404).json({ error: 'User not found' });
    }

    response.json(contact);
  }

  async store(request, response) {
    // Criar novo registro
    const {
      name, email, phone, category_id,
    } = request.body;
    if (!name) {
      return response.status(400).json({ error: 'name is required' });
    }

    // Verifica se existe um contato com o email fornecido
    const contactExixts = await ContactsRepository.findByEmail(email);
    // Caso exista retorna um status 400 com a mensagen de erro
    if (contactExixts) {
      return response.status(400).json({ error: 'This e-mail is already been taken' });
    }
    // Se nao existir conticua com a criação do contato
    const contact = await ContactsRepository.create({
      name, email, phone, category_id,
    });
    // Retornamos o contato cadastrado em json
    response.json(contact);
  }

  update() {
    // Editar um registro
  }

  async delete(request, response) {
    // Deletar um registro
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      // 404: Not Found
      return response.status(404).json({ error: 'User not found' });
    }

    await ContactsRepository.delete(id);

    // 204: No Content
    response.sendStatus(204);
  }
}

// Singleton onde so podemos usar uma instância desta classe
module.exports = new ContactController();
