// controllers/livreController.js
const Livre = require('../models/livre');

// Récupérer tous les livres
exports.getAll = async (req, res) => {
  try {
    const livres = await Livre.findAll();
    res.status(200).json(livres);
    console.log(livres);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des livres', error });
  }
};

// Récupérer un livre par titre
exports.getOne = async (req, res) => {
  try {
    const livre = await Livre.findOne({ where: { titre: req.params.nom } });
    if (!livre) return res.status(404).json({ message: 'Livre introuvable' });
    res.status(200).json(livre);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération du livre', error });
  }
};

// Créer un nouveau livre
exports.create = async (req, res) => {
  try {
    const nouveauLivre = await Livre.create({ nom: req.body.nom });
    res.status(201).json(nouveauLivre);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création du livre', error });
  }
};

// Mettre à jour un livre
exports.update = async (req, res) => {
  try {
    const livre = await Livre.findByPk(req.params.id);
    if (!livre) return res.status(404).json({ message: 'Livre introuvable' });
    livre.nom = req.body.nom;
    await livre.save();
    res.status(200).json(livre);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour du livre', error });
  }
};

// Supprimer un livre
exports.delete = async (req, res) => {
  try {
    const livre = await Livre.findByPk(req.params.id);
    if (!livre) return res.status(404).json({ message: 'Livre introuvable' });
    await livre.destroy();
    res.status(200).json({ message: 'Livre supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression du livre', error });
  }
};




