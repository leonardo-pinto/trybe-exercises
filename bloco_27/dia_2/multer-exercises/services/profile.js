const fs = require('fs');

const PATH_NAME = `${__dirname}/../profiles.json`;

const getProfiles = () => {
  const profiles = fs.readFileSync(PATH_NAME);
  return JSON.parse(profiles);
};

const writeProfile = (newProfile) => {
  const profiles = getProfiles();
  profiles.push(newProfile);
  fs.writeFileSync('profiles.json', JSON.stringify(profiles));

  return profiles;
};

module.exports = {
  getProfiles,
  writeProfile,
};
