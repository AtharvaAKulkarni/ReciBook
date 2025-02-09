const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "No token found" });
  }
  const tokenParts = token.split(" ");
  try {
    const JWT_SECRET = process.env.JWT_SECRET;
    const decoded = jwt.verify(tokenParts[1], JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch {
    res.status(403).json({ message: "Invalid Token" });
  }
};
module.exports = { verifyToken };