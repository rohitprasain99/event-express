const express = require("express");
const helmet = require("helmet");
const session = require("express-session");

const app = express();
require("dotenv").config();

const routePrefix = "/api/v1";

//file imports
const eventRoutes = require("./routes/event.routes");
const responseInterceptor = require("./interceptors/response.interceptor");

//middlewares
app.use("/static", express.static("public"));
app.use(responseInterceptor);
app.use(helmet());
app.use(
  session({
    secret: "hawamanche", // sign the session ID cookie to prevent tampering
    saveUninitialized: false, // save a session to the store when it is new but not yet modified
    resave: false, // session should be saved back to the session store even if it hasn’t been modified during the request.

    cookie: {
      httpOnly: true, // prevent js access to cookie -> XSS attack
      secure: false, // if https is used
      sameSite: "strict", // prevent CSRF attack
      maxAge: 1000 * 60 * 30, // after 30 minutes, the cookie expires, and the user’s session becomes invalid.
    },
  })
);

//routes
app.use(`${routePrefix}/events`, eventRoutes);

app.get(`${routePrefix}/`, (req, res) => {
  req.session.userId = req.sessionID;
  res.status(200).json("API running for EventNepal");
});

//server
app.listen(process.env.PORT, () => {
  console.log(`app running on port ${process.env.PORT}`);
});
