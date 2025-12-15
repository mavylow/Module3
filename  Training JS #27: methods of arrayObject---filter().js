function countGrade(scores) {
  return {
    S: scores.filter((grade) => grade === 100).length,
    A: scores.filter((grade) => grade < 100 && grade >= 90).length,
    B: scores.filter((grade) => grade < 90 && grade >= 80).length,
    C: scores.filter((grade) => grade < 80 && grade >= 60).length,
    D: scores.filter((grade) => grade < 60 && grade >= 0).length,
    X: scores.filter((grade) => grade === -1).length,
  };
}
