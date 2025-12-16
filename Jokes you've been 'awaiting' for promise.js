async function sayJoke(apiUrl, jokeId) {
  const response = await fetch(apiUrl);
  const data = await response.json();
  if (!data || !data.jokes) {
    throw new Error(`No jokes at url: ${apiUrl}`);
  }
  const joke = data.jokes.find((j) => j.id === jokeId);
  if (!joke) {
    throw new Error(`No jokes found id: ${jokeId}`);
  }
  return {
    saySetup: () => joke.setup,
    sayPunchLine: () => joke.punchLine,
  };
}
