import { statCalc } from "./Calculations";

test("calculates stat with nature", () => {
  let obj = { base: 130, iv: 12, ev: 190, level: 78 };
  expect(statCalc("attack", "adamant", obj)).toBe(278);
});
