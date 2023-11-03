class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      return await this.model.create(data);
    } catch (error) {
      console.log("Something went wrong in crud repository");
      throw { error };
    }
  }

  async destroy(modelId) {
    try {
      return await this.model.destroy({ where: { id: modelId } });
    } catch (error) {
      console.log("Something went wrong in crud repository");
      throw { error };
    }
  }

  async get(modelId) {
    try {
      return await this.model.findByPk(modelId);
    } catch (error) {
      console.log("Something went wrong in crud repository");
      throw { error };
    }
  }

  async getAll() {
    try {
      return await this.model.findAll();
    } catch (error) {
      console.log("Something went wrong in crud repository");
      throw { error };
    }
  }

  async update(modelId, data) {
    try {
      return await this.model.update(data, { where: { id: modelId } });
    } catch (error) {
      console.log("Something went wrong in crud repository");
      throw { error };
    }
  }
}

module.exports = CrudRepository;
