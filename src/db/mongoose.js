 const mongoose = require('mongoose');
//const uri="mongodb://127.0.0.1:27017/EcoFarma"
const uri = "mongodb+srv://usdbmjeff:4JrCckEXV2nXTuVL@cluster0.1uoxw.mongodb.net/EcoFarma?retryWrites=true&w=majority";

 mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});