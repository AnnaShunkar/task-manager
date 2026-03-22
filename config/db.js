import mongoose from 'mongoose';
const URI = 'mongodb+srv://annashynkar4:pavlovna06@cluster0.v0dzy2p.mongodb.net/?appName=Cluster0';

mongoose.connect(URI).then(() => {
    console.log('Connected to MongoDB');
}).catch((e) => {
    console.error(e);
});
