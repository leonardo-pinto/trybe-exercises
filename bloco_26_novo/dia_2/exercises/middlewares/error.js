module.exports = (err, _req, res, _next) => {
  console.log(err)
  if (err.status) {
    console.log(err.status);
    return null
  }

  if (err.isJoi) {
    return res.status(400).json({ "error": { code: "invalidData",  message: err.details[0].message } });
  };

  return res.status(500).json({ message: "Erro interno do servidor" });
};
