const { Op } = require("sequelize");
const { Flights } = require("../models");

class FlightRepository {
  #createFilter(data) {
    let filter = {};
    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }
    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }
    // the commented code added an extra price property to the filter object
    // so used the priceFilter array instead
    // if (data.minPrice && data.maxPrice) {
    //   Object.assign(filter, {
    //     price: { [Op.between]: [data.minPrice, data.maxPrice] },
    //   });
    // }
    let priceFilter = [];
    if (data.minPrice) {
      //   Object.assign(filter, { price: { [Op.gte]: data.minPrice } });
      priceFilter.push({ price: { [Op.gte]: data.minPrice } });
    }
    if (data.maxPrice) {
      //   Object.assign(filter, { price: { [Op.lte]: data.maxPrice } });
      priceFilter.push({ price: { [Op.lte]: data.maxPrice } });
    }
    if (priceFilter.length > 0) {
      Object.assign(filter, {
        [Op.and]: priceFilter,
      });
    }
    return filter;
  }

  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log("Something went wrong in repository");
      throw { error };
    }
  }

  async getFlight(flightId) {
    try {
      const flight = await Flights.findByPk(flightId);
      return flight;
    } catch (error) {
      console.log("Something went wrong in repository");
      throw { error };
    }
  }

  async getAllFlights(filter) {
    try {
      const filterObject = this.#createFilter(filter);
      const flights = await Flights.findAll({
        where: filterObject,
      });
      return flights;
    } catch (error) {
      console.log("Something went wrong in repository");
      throw { error };
    }
  }
}

module.exports = FlightRepository;
