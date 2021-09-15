import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  return res.send("Home");
};

const handleAbout = (req, res) => {
  return res.send("About");
};

const handleContact = (req, res) => {
  return res.send("Contact");
};

const handleLogin = (req, res) => {
  return res.send("Login");
};

const urlLogger = (req, res, next) => {
  console.log(`Path ${req.url}`);
  next();
};

const timeLogger = (req, res, next) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();
  console.log(`Time ${year}.${month}.${day}`);
  next();
};

const securityLogger = (req, res, next) => {
  const protocol = req.protocol;
  if (protocol !== "https") {
    console.log("Insecure ❌");
  }
  next();
};

const protectorMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  next();
};

app.use(urlLogger, timeLogger, securityLogger, protectorMiddleware);

app.get("/", handleHome);
app.get("/about", handleAbout);
app.get("/contact", handleContact);
app.get("/login", handleLogin);
app.get("/protected", (req, res) => res.send("I love middlewares"));

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
