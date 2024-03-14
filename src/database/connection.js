// const mongoose = require("mongoose");

// class MongoDatabase {
//   uri;
//   clientOptions;
//   connection;
//   constructor() {
//     this.uri =
//       "mongodb+srv://test:YYMHgQjfoXwwK0xq@cluster0.spamrym.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
//     this.clientOptions = {
//       serverApi: { version: "1", strict: true, deprecationErrors: true },
//     };
//   }

//   async openConnection() {
//     try {
//       // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
//       this.connection = await mongoose.connect(this.uri, this.clientOptions);
//       this.connection = await mongoose.connection.db.admin().command({ ping: 1 });
//       console.log(
//         "Pinged your deployment. You successfully connected to MongoDB!"
//       );
//     } catch (error) {
//       console.error("Error connecting to MongoDB: ", error);
//     }
//   }

// }

// const mongoDatabase = new MongoDatabase();
// module.exports = mongoDatabase;

const mongoose = require("mongoose");

class MongoDatabase {
  uri;
  clientOptions;
  connection;
  constructor() {
    this.uri =
      "mongodb+srv://64160207:q1OWW2VGiSmAKG69@cluster0.izvegzu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    this.clientOptions = {
      serverApi: { version: "1", strict: true, deprecationErrors: true },
    };
  }

  async openConnection() {
    try {
      // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
      this.connection = await mongoose.connect(this.uri, this.clientOptions);
      this.connection = await mongoose.connection.db.admin().command({ ping: 1 });
      console.log(
        "Pinged your deployment. You successfully connected to MongoDB!"
      );
    } catch (error) {
      console.error("Error connecting to MongoDB: ", error);
    }
  }

}

const mongoDatabase = new MongoDatabase();
module.exports = mongoDatabase;