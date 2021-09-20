export const join = (req, res) => res.render("join", { pageTitle: "join" });
export const login = (req, res) => res.render("login", { pageTitle: "login" });
export const seeUsers = (req, res) =>
  res.render("seeUsers", { pageTitle: "seeUsers" });
export const seeUser = (req, res) =>
  res.render("seeUser", { pageTitle: "seeUser" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "editProfile" });
