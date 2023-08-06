const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

// app.listen(3000, () => {
//     console.debug('App listening on :3000');
// });

app.use(morgan('tiny'));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up routes
app.use("/api", require("./api"));

// Pass back everything else / front-end

app.use("/dist", express.static(path.join(__dirname, "../dist")));
app.use("/static", express.static(path.join(__dirname, "../static")));
// app.get("/", (req, res) =>
//   res.sendFile(path.join(__dirname, "../static/index.html"))
// );
app.use("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../static/index.html"));
});

module.exports = app;