class CrudService {
  constructor(repository) {
    this.repository = repository;
  }

  async create(data) {
    try {
      return await this.repository.create(data);
    } catch (error) {
      console.log("Something went wrong in crud service");
      throw { error };
    }
  }

  async destroy(id) {
    try {
      return await this.repository.destroy(id);
    } catch (error) {
      console.log("Something went wrong in crud service");
      throw { error };
    }
  }

  async get(id) {
    try {
      return await this.repository.get(id);
    } catch (error) {
      console.log("Something went wrong in crud service");
      throw { error };
    }
  }

  async getAll() {
    try {
      return await this.repository.getAll();
    } catch (error) {
      console.log("Something went wrong in crud service");
      throw { error };
    }
  }

  async update(id, data) {
    try {
      return await this.repository.update(id, data);
    } catch (error) {
      console.log("Something went wrong in crud service");
      throw { error };
    }
  }
}

module.exports = CrudService;
