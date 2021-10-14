module.exports = (err, _req, res, _next) => {
  if (err.code) {
    const statusByCodeError = {
      notFound: 404,
    };

    const status = statusByCodeError[err.code] || 500;

    return res.status(status).send(err.message);
  }

  if (err.isJoi) {
    return res.status(400).json({ error: { message: err.details[0].message } });
  }

  return res.status(500).json({ error: { message: "Internal server error" } });
}
