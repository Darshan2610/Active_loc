const auth = (req, res, next) => {
  const token = req.headers["authorization"];
  if (token === "Bearer hardcoded_token") {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = auth;
