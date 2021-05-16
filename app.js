const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();

const url = "mongodb://127.0.0.1:27017";
const dbName = "graphql-library";

mongoose.connect(
  url + dbName,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("MongoDB connection succeeded!!");
    } else {
      console.log("MongoDB connection ERROR: " + err);
    }
  }
);

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT = 4000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
