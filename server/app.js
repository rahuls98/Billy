const express = require("express");
var cors = require("cors");
const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "./.env" });

const app = express();
app.use(cors());
const port = process.env.PORT || 8000;

let client = null;

async function connect() {
    try {
        const dbURI = process.env.ATLAS_URI;
        client = new MongoClient(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error(err);
    }
}

async function closeConnection() {
    try {
        await client.close();
        console.log("Disconnected from MongoDB");
    } catch (err) {
        console.error(err);
    }
}

connect();

app.get("/read", async (req, res) => {
    try {
        const db = client.db("billy-db");
        const collection = db.collection("data");
        const data = await collection.find({}).toArray();
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get("/readInvoiceAndCustomerNames", async (req, res) => {
    try {
        const db = client.db("billy-db");
        const collection = db.collection("data");

        const aggregationPipeline = [
            {
                $project: {
                    _id: 1,
                    invoiceNo: 1,
                    billingCustomerName: 1,
                },
            },
        ];

        const result = await collection
            .aggregate(aggregationPipeline)
            .toArray();

        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.post("/write", express.json(), async (req, res) => {
    try {
        const db = client.db("billy-db");
        const collection = db.collection("data");
        const result = await collection.insertOne(req.body);
        res.json({
            message: "Data written successfully",
            insertedId: result.insertedId,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

process.on("SIGINT", async () => {
    await closeConnection();
    process.exit(0);
});

process.on("SIGTERM", async () => {
    await closeConnection();
    process.exit(0);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
