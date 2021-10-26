const ping = require('./ping');
const upload = require('./upload');
const multiple = require('./multiple');
const { createProfile, getProfiles } = require('./profile');

module.exports = {
  ping,
  upload,
  multiple,
  createProfile, 
  getProfiles,
};
