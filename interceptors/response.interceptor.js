function responseMiddleware(req, res, next) {
  const originalJson = res.json;

  res.json = function (body) {
    const output = {
      status: 200,
      data: body,
    };

    return originalJson.call(this, output);
  };

  next();
}

module.exports = responseMiddleware;
