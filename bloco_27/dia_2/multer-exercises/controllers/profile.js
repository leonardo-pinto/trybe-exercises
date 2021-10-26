const services = require('../services');

const createProfile = (req, res) => {
  const { name, email, password, bio } = req.body;

  const profileData = {
    id: req.file.filename,
    name,
    email,
    password,
    bio,
  };

  const profiles = services.profile.writeProfile(profileData);

  return res.status(201).json({ profiles });
};

const getProfiles = (req, res) => {
  const profileId = req.params.id;
  const allProfiles = services.profile.getProfiles();

  const profileById = allProfiles.find((profile) => profile.id === profileId);

  if (profileById) return res.status(200).json(allProfiles);

  return res.status(404).json({ error: { message: 'Perfil não encontrado' } });
};

module.exports = {
  createProfile,
  getProfiles,
};
