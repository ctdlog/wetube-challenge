export const home = (req, res) => res.send("Home");

export const trending = (req, res) => res.send("Trending");
export const newStory = (req, res) => res.send("New");

export const watchStory = (req, res) =>
  res.send(`Watch Stories ${req.params.id}`);
export const editStory = (req, res) =>
  res.send(`Edit Stories ${req.params.id}`);
export const deleteStory = (req, res) =>
  res.send(`Delete Stories ${req.params.id}`);
