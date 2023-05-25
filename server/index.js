const express = require("express");
const cors = require("cors");
const app = express();
const jwt = require("jsonwebtoken");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
};

const port = process.env.PORT || 5000;

app.use(cors(corsOptions));
app.use(express.json());

const virefyjwt = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res
      .status(401)
      .send({ error: true, message: "Invalid authorization" });
  }
  const token = authorization.split(" ")[1];

  jwt.verify(token, process.env.JWT_ACCESS_TOKEN, (err, decoded) => {
    if (err) {
      return res
        .status(403)
        .send({ error: true, message: "Invalid authorization" });
    }
    req.decoded = decoded;
    next();
  });
};

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

    //  jwt token

    app.post("/jwt", (req, res) => {
      const user = req.body;
      console.log("req-body", user);
      const token = jwt.sign(user, process.env.JWT_ACCESS_TOKEN, {
        expiresIn: "1h",
      });
      res.send({ token });
    });

    // services collection
    app.post("/bookings", async (req, res) => {
      const doc = req.body;
      const result = await BokingCollections.insertOne(doc);
      res.send(result);
    });

    app.delete("/bookings/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await BokingCollections.deleteOne(query);
      res.send(result);
    });

    app.patch("/bookings/:id", async (req, res) => {
      const id = req.params.id;
      const updatebook = req.body;
      const query = { _id: new ObjectId(id) };
      console.log(updatebook);
      const updateDoc = {
        $set: {
          status: updatebook.status,
        },
      };
      const result = await BokingCollections.updateOne(query, updateDoc);
      res.send(result);
    });

    // query method
    app.get("/bookings", virefyjwt, async (req, res) => {
      const decoded = req.decoded;
      console.log("comming back to jwt", decoded);
      if (decoded.email !== req.query.email) {
        return res
          .status(401)
          .send({ error: true, message: "forbidden access" });
      }
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
