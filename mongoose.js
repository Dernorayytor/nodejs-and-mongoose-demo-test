const mongoose = require("mongoose");
const uri =
  "mongodb+srv://developer:V5uU3ni8GjU7BOZG@cluster0.xfdupoe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};
mongoose.connect(uri, clientOptions);