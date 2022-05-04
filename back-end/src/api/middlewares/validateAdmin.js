const HTTPCodes = require('../../utils/HTTPCodes');

const validateAdmin = async (req, res, next) => {
  const { user } = req;
  if (user.role !== 'administrator') {
    return res.status(HTTPCodes.UNAUTHORIZED).json({
      message: 'You are not authorized to perform this action',
    });
  }
  next();
};

module.exports = validateAdmin;