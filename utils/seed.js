const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    await User.deleteMany({});

    await Thought.deleteMany({});

    await User.collection.insertMany([
        {
            username: 'Walter White',
            email: 'walterwhite@gmail.com'
        },
    ]);

    await Thought.collection.insertMany([{
        thoughtText: 'Hello',
        username: 'Walter White'
    }]);

    console.info('Seeding complete! 🌱');
    process.exit(0);
});