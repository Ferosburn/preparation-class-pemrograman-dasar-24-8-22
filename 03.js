const oddOrEven = (num) => {
  if (num % 2 === 0) {
    return 'Genap';
  }
  return 'Ganjil'
};

console.log(
  oddOrEven(43),
  oddOrEven(1032)
);