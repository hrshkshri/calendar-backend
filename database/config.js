const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    mongoose.set('strictQuery', false);

    console.log('Connecting to database...');
    await mongoose.connect(process.env.DB_CONN);

    console.log('DB Online');
  } catch (error) {
    console.log(error);
    throw new Error('Error starting database');
  }
};

module.exports = { dbConnection };
