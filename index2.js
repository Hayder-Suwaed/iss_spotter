const { nextISSTimesForMyLocation } = require("./iss_promised");
nextISSTimesForMyLocation().then((passTimes) => {
  for (let time of passTimes) {
    const dateObj = new Date(time.risetime * 1000);
    console.log(
      `Next pass at ${dateObj.toUTCString()} for ${time.duration} seconds!`
    );
  }
});
