const leapYear = (year) => {
  if (year % 400 === 0) {
    return 'Kabisat';
  } else if (year % 100 === 0) {
    return 'Bukan Kabisat';
  } else if (year % 4 === 0) {
    return 'Kabisat';
  }
  return 'Bukan Kabisat';
};

console.log(
  leapYear(1900),
  leapYear(2000),
  leapYear(2001),
  leapYear(2016)
);