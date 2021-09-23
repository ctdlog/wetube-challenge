// export const urlLogger = (req, res, next) => {
//   console.log(`Path ${req.url}`);
//   next();
// };

// export const timeLogger = (req, res, next) => {
//   const date = new Date();
//   const year = date.getFullYear();
//   const month = date.getMonth();
//   const day = date.getDay();
//   console.log(`Time ${year}.${month}.${day}`);
//   next();
// };

// export const securityLogger = (req, res, next) => {
//   const protocol = req.protocol;
//   if (protocol !== "https") {
//     console.log("Insecure ❌");
//   }
//   next();
// };

// export const protectorMiddleware = (req, res, next) => {
//   const url = req.url;
//   if (url === "/protected") {
//     return res.send("<h1>Not Allowed</h1>");
//   }
//   next();
// };
