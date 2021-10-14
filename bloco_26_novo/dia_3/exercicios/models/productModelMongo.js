const connection = require('./connectionMongo');
const { ObjectId } = require('mongodb');

const add = async (name, brand) => {
  try {
    const db = await connection();
    const product = await db.collection('products').insertOne({ name, brand });
    return product;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

async function getAll() {
  const db = await connection();
  const products = await db.collection('products').find().toArray();
  return products;
}

const getById = async (id) => {
  // if(!ObjectId.isValid(id)) null;
  try {
    const db = await connection();
    const product = await db.collection('products').findOne(ObjectId(id));
    return product;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const update = async (id, name, brand) => {
  try {
    const db = await connection();
    const product = await db.collection('product').updateOne({ _id: ObjectId(id) }, { $set: name, brand })
    if (!product) return add(name, brand)
    return product;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const exclude = async (id) => {
  try {
    const db = await connection();
    const product = await getById(id);
    if (!product) return {};
    await db.collection('products').deleteOne({ _id: ObjectId(id) });
    return product;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

module.exports = { add, getAll, getById, update, exclude };