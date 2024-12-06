const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/fetch-headers', async (req, res) => {
    const targetURL = req.query.url || 'http://atnlucien.fr'; // URL cible par défaut
    try {
        const response = await axios.get(targetURL, {
            validateStatus: false,
        });

        res.json({
            headers: response.headers,
            status: response.status,
            url: targetURL,
        });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des headers.' });
    }
});

app.listen(PORT, () => {
    console.log(`Serveur proxy démarré sur http://localhost:${PORT}`);
});
