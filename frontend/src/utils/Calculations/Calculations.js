import { natures } from "../data/natures";
export const hp = obj => {
  let { base, iv, ev, level } = hp;

  return (2 * base + iv + (ev / 4) * level) / 100 + level + 10;
};

export const statCalc = (stat, nature, obj) => {
  let { base, iv, ev, level } = obj;
  let natureMod = 1;
  if (natures[nature].increased === stat) {
    natureMod = 1.1;
  } else if (natures[nature].decreased === stat) {
    natureMod = 0.9;
  }
  const evCalc = parseInt(ev / 4);
  console.log(2 * base + iv + evCalc);
  return parseInt(
    (parseInt(((2 * base + iv + evCalc) * level) / 100) + 5) * natureMod
  );
};
