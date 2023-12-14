const malScraper = require('mal-scraper')
const fs = require('fs')

const username = 'mikomikazuki'
const after = 25
const type = 'anime' // can be either `anime` or `manga`
const status = 7 // All anime

// Get you an object containing all the entries with status, score... from this user's watch list
malScraper.getWatchListFromUser(username, after, type, status)
  .then((data) => {
    fs.writeFile("scraped.json", JSON.stringify(data), function (err) {
      if (err) {
        console.log(err);
      }
    });
  })
  .catch((err) => console.log(err))

