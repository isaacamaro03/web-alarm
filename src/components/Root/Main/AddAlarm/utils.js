function padNumber(number) {
  if (typeof number !== "number") {
    number = parseInt(number) || 0;
  }
  return number > 9 ? number.toString() : "0" + number;
}

export { padNumber };
