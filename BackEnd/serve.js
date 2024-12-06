const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;

const livresRoutes = require('./routes/livreRoutes');
const abonnesRoutes = require('./routes/abonneRoutes');
const pretsRoutes = require('./routes/pretRoutes');

// Middleware pour traiter le JSON
app.use(express.json());
app.use(cors());
//app.use(cors());
// Utiliser les routes
app.use('/api/livres', livresRoutes);
app.use('/api/abonnes', abonnesRoutes);
app.use('/api/prets', pretsRoutes);

app.get('/api/data', (req, res) => {
  res.json({ message: 'CORS configuré avec succès !' });
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
