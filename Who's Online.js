const whosOnline = (friends) => {
  const res = {};
  friends
    .map((f) =>
      f.status === "online" && f.lastActivity > 10
        ? { ...f, status: "away" }
        : f
    )
    .forEach((f) => {
      if (res[f.status]) {
        res[f.status].push(f.username);
      } else {
        res[f.status] = [f.username];
      }
    });
  return res;
};
