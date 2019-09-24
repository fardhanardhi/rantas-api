const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://dbUser:understanding437@cluster0-wsey8.mongodb.net/rantas?ssl=true&retryWrites=true&w=majority",
    {
      useNewUrlParser: true
    }
  )
  .then(() => console.log("connected"))
  .catch(err => console.log("err: " + err));
