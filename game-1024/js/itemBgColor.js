const SHIFT = 0.105;

export default function itemBgColor(value) {
  const n = value.toString(2).length - 2;
  const hue = (n * SHIFT) % 1;
  const saturate = (n % 2) * 30 + 30;
  const light = saturate;
  return `hsl(${hue}turn ${saturate}% ${light}%)`;
}
