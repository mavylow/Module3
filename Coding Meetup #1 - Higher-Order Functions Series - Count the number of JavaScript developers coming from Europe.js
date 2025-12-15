function countDevelopers(list) {
  return list.filter(
    (developer) =>
      developer.continent === "Europe" && developer.language === "JavaScript"
  ).length;
}
