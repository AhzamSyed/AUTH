import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// /mongodb+srv://admin:ahzam123@cluster0.8ctpg2o.mongodb.net/