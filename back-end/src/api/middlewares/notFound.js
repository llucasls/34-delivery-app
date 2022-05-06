const HTTPCodes = require('../../utils/HTTPCodes');

const notFound = (_req, res, _next) => {
  res.status(HTTPCodes.NOT_FOUND).json({
    message: 'Not found',
  });
};

module.exports = notFound;