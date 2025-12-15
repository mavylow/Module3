function findAdmin(list, lang) {
  return list
    .filter((dev) => dev.language === lang)
    .filter((dev) => dev.githubAdmin === "yes");
}
