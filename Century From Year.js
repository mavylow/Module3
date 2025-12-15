function century(year) {
  return year % 100 ? Math.ceil(year / 100) : Math.floor(year / 100);
}
