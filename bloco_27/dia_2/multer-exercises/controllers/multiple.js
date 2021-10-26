module.exports = (req, res) => {
  const uploadedFiles = req.files.map((file) => ({
    file: file.originalname,
    url: `http://localhost:3000/${file.path}`,
  }));

  return res.status(201).json(uploadedFiles);
};
