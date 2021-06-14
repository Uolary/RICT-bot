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

  getImagesList() {
    return cloudinary.search.expression(constants.cloudFolder)
      .max_results(500)
      .execute()
      .then((result) => result.resources);
  }

  async getRandomImage() {
    const imagesList = await this.getImagesList();
    const randomIndex = this._randomNumber(0, imagesList.length);

    return imagesList[randomIndex];
  }

  _randomNumber(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
}

const cloud = new Cloud();

module.exports = cloud;
