export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const trending = (req, res) =>
  res.render("trending", { pageTitle: "trending" });
export const newStories = (req, res) =>
  res.render("newStories", { pageTitle: "newStories" });
export const seeStory = (req, res) =>
  res.render("seeStory", { pageTitle: "seeStory" });
export const editStory = (req, res) =>
  res.render("editStory", { pageTitle: "editStory" });
export const deleteStory = (req, res) =>
  res.render("deleteStory", { pageTitle: "deleteStory" });
