export function sum(a, b, ...c) {
  let suma = a + b;

  c.forEach((item) => {
    suma += item;
  });

  return suma;
}

export function substract(a, b, ...c) {
  let substract = a - b;

  c.forEach((item) => {
    substract -= item;
  });

  return substract;
}

export function multiply(a, b, ...c) {
  let multy = a * b;

  c.forEach((item) => (multy *= item));

  return multy;
}
