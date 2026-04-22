const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("Authorization");

  console.log("AUTH HEADER:", authHeader);

  if (!token) return res.status(401).send("Access denied");

  const actualToken = token.replace("Bearer ", "");

  try {
    const verified = jwt.verify(actualToken, process.env.JWT_SECRET); // 👈 FIX HERE
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
};
