const axios = require("axios");
const cheerio = require("cheerio");

module.exports = async function (context, req) {
  try {
    const result = await someAsyncOperation();
    context.res = {
      body: result,
    };
  } catch (error) {
    context.res = {
      status: 500,
      body: error.message,
    };
  }
};

async function someAsyncOperation() {
  return new Promise(async (resolve, reject) => {
    let res = {};
    let eventsData = [];
    const UKAurl = "https://www.uka.no/";

    const response = await axios.get(UKAurl);
    const body = response.data;
    const $ = cheerio.load(body); // Load HTML data and initialize cheerio

    const events = $(".news-tile-container");
    // The 'each()' method loops over all pokemon list items
    events.each((index, el) => {
      // Get the image, name, and price of each pokemon and create an object
      const event = {};

      // Selector to get the image 'src' value of a pokemon
      event.src = $(el).find("a").attr("href");
      event.imgUrl = $(el).find("img").attr("src");
      event.text = $(el).find("h2").text();
      eventsData.push(event);
    });

    res.array = eventsData;
    if (res.array) {
      resolve(res);
    } else {
      reject("Operation failed.");
    }
  });
}
