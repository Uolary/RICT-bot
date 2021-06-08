require('dotenv').config();
const constants = require('./constants');

const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

class Cloud {
  constructor() {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.CLOUD_API_KEY,
      api_secret: process.env.CLOUD_API_SECRET,
    });
  }

  async getImagesList() {
    return await cloudinary.search.expression(constants.cloudFolder)
      .max_results(500)
      .execute()
      .then((result) => result.resources);
  }
}

const cloud = new Cloud();

module.exports = cloud;
