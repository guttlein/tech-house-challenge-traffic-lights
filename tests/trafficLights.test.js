// trafficSimulation.test.js
const { simulateTraffic } = require("../index");

describe("Traffic Simulation", () => {
  test("simulateTraffic with initial conditions", () => {
    const road = ["C", "C", "C", ".", "G", ".", ".", ".", "R", ".", ".", "."];
    const n = 16; // Número de unidades de tiempo a simular
    const result = simulateTraffic(road, n);

    expect(result).toEqual([
      "CCC.G...R...", // 0 initial state as passed
      ".CCCG...R...", // 1
      "..CCC...R...", // 2 show 1st car, not the green light
      "..CCGC..R...", // 3 2nd car cannot enter intersection because 1st car blocks the exit
      "...CC.C.R...", // 4 show 2nd car, not the green light
      "...COC.CG...", // 5 3rd car stops for the orange light
      "...CR.C.C...", // 6
      "...CR..CGC..", // 7
      "...CR...C.C.", // 8
      "...CR...GC.C", // 9
      "...CR...O.C.", // 10
      "....C...R..C", // 11 3rd car can proceed
      "....GC..R...", // 12
      "....G.C.R...", // 13
      "....G..CR...", // 14
      "....G..CR...", // 15
      "....O...C...", // 16
    ]);
  });

  test("simulateTraffic with all cars moving freely", () => {
    const road = ["C", ".", "C", ".", "C"];
    const n = 5;
    const result = simulateTraffic(road, n);

    expect(result).toEqual([
      "C.C.C",
      ".C.C.",
      "..C.C",
      "...C.",
      "....C",
      ".....",
    ]);
  });
});
