// index.js
const {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes,
  nextISSTimesForMyLocation
} = require("./iss");

fetchMyIP((error, ipl) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log("It worked! Returned IP:", ipl);
});

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) return console.log(error);
  for (let time of passTimes) {
    const dateObj = new Date(time.risetime * 1000);
    console.log(
      `Next pass at ${dateObj.toUTCString()} for ${time.duration} seconds!`
    );
  }
});
