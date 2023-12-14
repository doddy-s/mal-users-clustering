const malScraper = require('mal-scraper')
const fs = require('fs')
const { PrismaClient } = require('@prisma/client')

// const prisma = new PrismaClient()

malScraper.getReviewsList({
  name: 'Sakura Trick',
  id: 20047,
  limit: 1,
  skip: 20
})
  .then((data) => console.log(data))
  .catch((err) => console.log(err))

// async function saveUsers(users) {
//   console.log(users.username)
//   const createUsers = await prisma.users.upsert({
//     update:
//       { username: users.username },
//     where: { username: users.username },
//     create: { username: users.username }
//   })
// }

// malScraper.getUser('mikomikazuki')
//   .then((data) => saveUsers(data))
//   .catch((err) => console.log(err))





// const username = 'mikomikazuki'
// const after = 25
// const type = 'anime' // can be either `anime` or `manga`
// const status = 7 // All anime

// Get you an object containing all the entries with status, score... from this user's watch list
// malScraper.getWatchListFromUser(username, after, type, status)
//   .then((data) => {
//     fs.writeFile("scraped.json", JSON.stringify(data), function (err) {
//       if (err) {
//         console.log(err);
//       }
//     });
//   })
//   .catch((err) => console.log(err))


