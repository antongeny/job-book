const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const cors = require('cors');
// app.listen(3000, () => {
//     console.debug('App listening on : 3000');
// });

app.use(cors());
app.use(morgan('tiny'));
// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./api"));

// Pass back everything else / front-end

// app.use("/dist", express.static(path.join(__dirname, "../dist")));
// app.use("/public", express.static(path.join(__dirname, "../public")));
// app.get("/", (req, res) =>
//   res.sendFile(path.join(__dirname, "../static/index.html"))
// );
app.use("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;