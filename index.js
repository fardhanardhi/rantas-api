const express = require("express");
const app = express();
const cors = require("cors");

require("./config/database");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/player", require("./router/playerRouter"));

app.listen(process.env.PORT || 3000, function() {
  console.log("Server listening on port 3000");
});
