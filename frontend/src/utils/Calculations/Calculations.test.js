export const hp = obj => {
  let { base, iv, ev, level } = hp;

  return (2 * base + iv + (ev / 4) * level) / 100 + level + 10;
};

export const stat = obj => {
  let { base, iv, ev, level, nature } = hp;

  return ((2 * base + iv + (ev / 4) * level) / 100 + 5) * nature;
};
