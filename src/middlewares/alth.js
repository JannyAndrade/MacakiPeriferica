const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET;

exports.checkAuth = (request, response, next) => {
  const authHeader = request.get("authorization");
  if (!authHeader) {
    return response.status(401).send({
      message: "Você não está autorizado!",
      statusCode: 401,
    });
  }

try {
    jwt.verify(token, SECRET, (err) => {
      if (err) {
        return response.status(401).send({
          message: "Você não está autorizado!",
        });
      }
      next();
    });
  } catch (err) {
    response.status(500).send({
      message: err.message,
    });
  }
};

