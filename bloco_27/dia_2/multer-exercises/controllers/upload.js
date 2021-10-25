module.exports = (req, res) => {
  if (req.fileValidationError) {
    return res.status(403).json({ error: { message: 'Extension must be "png"' } });
  }

  if (req.fileDuplicated) {
    return res.status(409).json({ error: { message: 'Fila already exists' } });
  }

  return res.status(200).send('File uploaded successfully!');
};
