function splitTheBill(group) {
  const values = Object.values(group);
  const total = values.reduce((sum, amount) => sum + amount, 0);
  const average = total / values.length;

  const result = {};
  for (const friend in group) {
    result[friend] = parseFloat((group[friend] - average).toFixed(2));
  }

  return result;
}
