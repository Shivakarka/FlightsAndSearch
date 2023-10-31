const { CityService } = require("../services/index");

const cityService = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    res.status(201).json({
      data: city,
      success: true,
      message: "City created successfully",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create city",
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    res.status(200).json({
      data: response,
      success: true,
      message: "City deleted successfully",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete city",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const response = await cityService.getCity(req.params.id);
    res.status(200).json({
      data: response,
      success: true,
      message: "City fetched successfully",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch city",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await cityService.updateCity(req.params.id, req.body);
    res.status(200).json({
      data: response,
      success: true,
      message: "City updated successfully",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update city",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await cityService.getAllCities(req.query);
    res.status(200).json({
      data: response,
      success: true,
      message: "Cities fetched successfully",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch cities",
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  get,
  getAll,
  update,
};
