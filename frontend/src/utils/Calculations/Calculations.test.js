import { statCalc, hp } from "./Calculations";

test("calculates stat with nature", () => {
  let obj = { base: 130, iv: 12, ev: 190, level: 78 };
  expect(statCalc("attack", "adamant", obj)).toBe(278);
});

test("calculates hp", () => {
  let obj = { base: 108, iv: 24, ev: 74, level: 78 };
  expect(hp(obj)).toBe(289);
});
