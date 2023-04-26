const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    await User.deleteMany({});

    await Thought.deleteMany({});

    // Add students to the collection and await the results
    await User.collection.insertMany([
        {
            username: 'Walter White',
            email: 'walterwhite@gmail.com'
        },
    ]);

    // Add courses to the collection and await the results
    await Thought.collection.insertMany([{
        thoughtText: 'Hello',
        username: 'Walter White'
    }]);

    // Log out the seed data to indicate what should appear in the database
    console.info('Seeding complete! 🌱');
    process.exit(0);
});