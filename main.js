const originalTune = 1504;

let wellTemperedScaleFrequency = [
  55, 58.3, 61.7, 32.7, 34.5, 36.6, 38.9, 41.1, 43.6, 46.1, 49, 51.8,
];
const wellTemperedScaleName = [
  "A",
  "A#",
  "B",
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
];

let referencial = 1000;
let finalList = [];

wellTemperedScaleFrequency.forEach((key) => {
  for (let i = 0; i < 8; i++) {
    /*tester la diference avec chaque octave et garder la valeur la plus basse (valeur absolu)*/
    let testedKey = key * 2 ** i;
    let difference = Math.abs(originalTune - testedKey);

    if (difference < referencial) {
      referencial = difference;
    }
  }
  finalList.push(referencial);
  referencial = 1000;
});
indexKey = finalList.indexOf(Math.min.apply(Math, finalList));
console.log(wellTemperedScaleName[indexKey]);
