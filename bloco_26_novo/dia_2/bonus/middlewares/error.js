module.exports = (err, _req, res, _next) => {
  console.log(err)

  if (err.code) {
    const statusByErrorCode = {
      notFound: 404,
      alreadyExists: 409,
    };

    const status = statusByErrorCode[err.code] || 500;

    return res.status(status).json(err);
  };

  if (err.isJoi) {
    return res.status(400).json({ "error": { code: "invalidData",  message: err.details[0].message } });
  };

  return res.status(500).json({ error: {  code: 'internal', message: "Internal server error" } });
};
