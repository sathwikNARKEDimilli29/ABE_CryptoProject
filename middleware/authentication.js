const jwt = require("jsonwebtoken");
const { secretKey } = require("../config/config");

const authenticateUser = (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (ex) {
    return res.status(400).json({ message: "Invalid token." });
  }
};

module.exports = authenticateUser;
