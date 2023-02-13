// imports
const axios = require("axios");
const cheerio = require("cheerio");

// selve Azure function
module.exports = async function (context, req) {
  // kjører funksjonen under og returnerer korrekt respons
  try {
    const result = await scrapeWebsite();
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

async function scrapeWebsite() {
  return new Promise(async (resolve, reject) => {
    let res = {};
    let eventsData = [];
    const UKAurl = "https://www.uka.no/nyheter/";

    // Henter hele nettsiden
    const response = await axios.get(UKAurl);
    const body = response.data;

    // Initialiserer cheerio og laster inn HTML'en som er hentet
    const $ = cheerio.load(body);

    // Filtrerer ut de ønksede "parent"-elementene. I dette tilfellet div'er med en felles class
    const events = $(".news-tile-container");
    // Looper så gjennom resultatene (alle de ulike div'ene)
    events.each((index, el) => {
      // Tomt objekt for å lagre informasjonen
      const event = {};

      // Legger til de ulike attributtene (er så enkelt som å inspekte nettsiden og finne ønsket element
      // merk at vi er inne .news-tile-container, så man kan hente elementene direkte)
      event.src = $(el).find("a").attr("href");
      event.imgUrl = $(el).find("img").attr("src");
      event.text = $(el).find("h2").text();

      // Pusher de så inn i en liste
      eventsData.push(event);
    });

    // Returnerer listen om det ble funnet noen matchende elementer
    res.array = eventsData;
    if (res.array) {
      resolve(res);
    } else {
      reject("Operation failed.");
    }
  });
}
