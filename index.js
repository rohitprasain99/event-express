const express = require("express");
const app = express();
require("dotenv").config();

const routePrefix = "/api/v1";
//file imports
const eventRoutes = require("./routes/event.routes");
const responseInterceptor = require("./interceptors/response.interceptor");

//middlewares
app.use("/static", express.static("public"));
app.use(responseInterceptor);

//routes
app.use(`${routePrefix}/events`, eventRoutes);
app.get(`${routePrefix}/api/v1`, (req, res) => {
  res.send("API running for EventNepal");
});

//server
app.listen(process.env.PORT, () => {
  console.log(`app running on port ${process.env.PORT}`);
});
