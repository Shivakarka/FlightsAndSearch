const { ClientErrorCodes } = require("../utils/error-codes");

const validateCreateFlight = (req, res, next) => {
  const { body } = req;
  const {
    flightNumber,
    airplaneId,
    departureTime,
    arrivalTime,
    departureAirportId,
    arrivalAirportId,
    price,
  } = body;
  if (
    !flightNumber ||
    !airplaneId ||
    !departureTime ||
    !arrivalTime ||
    !departureAirportId ||
    !arrivalAirportId ||
    !price
  ) {
    return res.status(ClientErrorCodes.BAD_REQUEST).json({
      data: {},
      success: false,
      message: "Invalid request body for create flight",
      err: "Missing required fields to create flight",
    });
  }
  next();
};

module.exports = {
  validateCreateFlight,
};
