function askForMissingDetails(list) {
  return list
    .map((dev) => {
      for (let key in dev) {
        if (dev[key] === null) {
          if (!dev.question) {
            dev.question = `Hi, could you please provide your ${key}.`;
          } else {
            dev.question += `Hi, could you please provide your ${key}.`;
          }
        }
      }
      return dev;
    })
    .filter((dev) => dev.question);
}
