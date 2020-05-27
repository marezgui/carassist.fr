export const getPrice = (distance: number, vehicule: 'BASIC' | 'SEDAN' | 'SUV' = 'BASIC'): number => {
  const coefPerTypePerKm = {
    "BASIC": 1.4,
    "SEDAN": 1.6,
    "SUV": 2
  };

  const coefPerKm = coefPerTypePerKm[vehicule];
  let price: number = 50;

  price += (distance / 1000) * coefPerKm;

  return Math.floor(price);
};

export const isNotEmptyObj = (obj: object) => {
  return Object.keys(obj).length !== 0;
};
