const mongoose = require('mongoose');

const client = mongoose;
client.set("useNewUrlParser", true);
client.set("useFindAndModify", false);
client.set("useCreateIndex", true);
client.set("useUnifiedTopology", true);




export const connect = async (URI) => {
    try {
        await client.connect(URI)
        console.log('Connected to database! [DB-S]');
    } catch (error) {
        console.log('An error ocurred [DB-C]')
    }
}