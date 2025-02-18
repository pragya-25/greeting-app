const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

// API Endpoint
app.get('/api/greet', (req, res) => {
    const name = req.query.name;

    if (!name) {
        return res.status(400).json({ error: 'Name is required.' });
    }

    res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
