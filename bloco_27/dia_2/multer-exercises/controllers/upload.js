const upload = (req, res) => {
  if (req.fileValidationError) {
    return res.status(403).json({ error: { message: 'Extension must be "png"' } });
  }

  if (req.fileExistsError) {
    return res.status(409).json({ error: { message: 'File already exists' } });
  }

  res.status(200).send('Ok.');
};

module.exports = upload;
