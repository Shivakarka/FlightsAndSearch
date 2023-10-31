const { Op } = require("sequelize");
const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("Something went wrong in repository");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({ where: { id: cityId } });
      return true;
    } catch (error) {
      console.log("Something went wrong in repository");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong in repository");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      // The below approach is not recommended as it will not return the updated city
      // if we are using Postgres as a database, then we can use the below approach
      // const city = await City.update(data, { where: { id: cityId } });

      // The below approach is recommended as it will return the updated city
      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
    } catch (error) {
      console.log("Something went wrong in repository");
      throw { error };
    }
  }

  async getAllCities(filter) {
    // filter is an optional parameter
    try {
      if (filter.name) {
        const cities = await City.findAll({
          where: { name: { [Op.like]: `%${filter.name}%` } },
        });
        return cities;
      }
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.log("Something went wrong in repository");
      throw { error };
    }
  }
}

module.exports = CityRepository;
