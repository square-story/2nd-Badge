const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('hello');
});

app.get('/add', (req, res) => {
    res.status(200).send('hello from add');
});

// Middleware to handle unmatched GET routes
app.use((req, res, next) => {
    if (req.method === 'GET') {
        res.status(404).send('endeddd'); // Respond with "endeddd" for unmatched GET routes
    } else {
        next(); // Pass other methods to the next middleware (if any)
    }
});

// Fallback for unmatched non-GET routes
app.use((req, res) => {
    res.status(404).send('Route not found');
});

app.listen(3000, () => {
    console.log('The server is running on port 3000');
});
