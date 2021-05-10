const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();

const port = process.env.PORT || 3001;


app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(require("./routes/routes.js"))
app.listen(port, () => console.log(`DockePok tourne actuellement sur le port ${port}`))