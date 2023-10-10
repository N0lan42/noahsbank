
const { MongoClient } = require('mongodb');

// Define the MongoDB connection URL using an environment variable or a default value
const mongoURL = process.env.MONGODB_URL || 'mongodb://localhost:27017/myproject';

// Create a MongoDB client
const client = new MongoClient(mongoURL, { useUnifiedTopology: true });

// Function to create a new user
async function create(name, email, password) {
  const db = await connectToMongoDB();
  const collection = db.collection('users');
  const doc = { name, email, password, balance: 0 };
  try {
    const result = await collection.insertOne(doc);
    return result.ops[0];
  } catch (err) {
    throw err;
  }
}

// Function to find user accounts by email
async function find(email) {
  const db = await connectToMongoDB();
  const collection = db.collection('users');
  try {
    const docs = await collection.find({ email: email }).toArray();
    return docs;
  } catch (err) {
    throw err;
  }
}

// Function to find one user account by email
async function findOne(email) {
  const db = await connectToMongoDB();
  const collection = db.collection('users');
  try {
    const doc = await collection.findOne({ email: email });
    return doc;
  } catch (err) {
    throw err;
  }
}

// Function to update user account balance
async function update(email, amount) {
  const db = await connectToMongoDB();
  const collection = db.collection('users');
  try {
    const documents = await collection.findOneAndUpdate(
      { email: email },
      { $inc: { balance: amount } },
      { returnOriginal: false }
    );
    return documents;
  } catch (err) {
    throw err;
  }
}

// Function to return all user accounts
async function all() {
  const db = await connectToMongoDB();
  const collection = db.collection('users');
  try {
    const docs = await collection.find({}).toArray();
    return docs;
  } catch (err) {
    throw err;
  }
}

// Function to establish a MongoDB connection
async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected successfully to the MongoDB server');
    return client.db();
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

module.exports = {
  create,
  findOne,
  find,
  update,
  all,
};
