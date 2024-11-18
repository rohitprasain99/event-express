function responseMiddleware(req, res, next) {
  // save original JSON
  const originalJSON = res.json;

  // override res.json
  res.json = function (body, message) {
    const formatter = {
      status: res.statusCode,
      message: message,
      data: body,
    };

    // return original JSON with modified attributes
    return originalJSON.call(this, formatter);
  };

  next();
}

module.exports = responseMiddleware;
