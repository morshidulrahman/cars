const express = require("express");
const cors = require("cors");
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("cars data is running");
});

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.apzeojt.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const ServicesCollection = client.db("CarsDB").collection("services");
    const BokingCollections = client.db("CarsDB").collection("bookings");

    app.post("/bookings", async (req, res) => {
      const doc = req.body;
      const result = await BokingCollections.insertOne(doc);
      res.send(result);
    });

    // query method
    app.get("/bookings", async (req, res) => {
      console.log(req.query.email);
      let query = {};
      if (req.query.email) {
        query = { email: req.query.email };
      }
      const cursor = BokingCollections.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/services", async (req, res) => {
      const cursor = ServicesCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/services/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const options = {
        // Include only the `title` and `imdb` fields in the returned document
        projection: { title: 1, price: 1, service_id: 1, img: 1 },
      };
      const result = await ServicesCollection.findOne(query, options);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log("listening on port " + port);
});
