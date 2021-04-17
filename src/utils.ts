export const rgbaToHexa = (rgba: any) => {
  let { r, g, b, a } = rgba;
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);
  a = Math.round(a * 255).toString(16);

  if (r.length == 1) {
    r = "0" + r;
  }

  if (g.length == 1) {
    g = "0" + g;
  }

  if (b.length == 1) {
    b = "0" + b;
  }

  if (a.length == 1) {
    a = "0" + a;
  }

  return "#" + r + g + b + a;
};

export const hexaToRgba = (hexa: string) => {
  let r = 0;
  let g = 0;
  let b = 0;
  let a = 1;

  hexa = hexa.replace("#", "").toLowerCase();

  try {
    if (hexa.length >= 6) {
      r = parseInt(hexa.substring(0, 2), 16);
      g = parseInt(hexa.substring(2, 4), 16);
      b = parseInt(hexa.substring(4, 6), 16);

      if (hexa.length >= 8) {
        a = parseInt(hexa.substring(6, 8), 16) / 255;
      }
    }
  } catch (err) {
    console.error(err);
  }

  return { r, g, b, a };
};
