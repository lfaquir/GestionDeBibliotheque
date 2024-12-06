// controllers/abonneController.js
const Abonne = require('../models/abonne');

exports.getAll = async (req, res) => {
  try {
    const abonnes = await Abonne.findAll();
    res.status(200).json(abonnes);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des abonnés', error });
  }
};

exports.getOne = async (req, res) => {
  try {
    const abonne = await Abonne.findOne({ where: { nom: req.params.nom } });
    if (!abonne) return res.status(404).json({ message: 'Abonné introuvable' });
    res.status(200).json(abonne);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération de l’abonné', error });
  }
};

exports.create = async (req, res) => {
  try {
    const nouveauAbonne = await Abonne.create({ nom: req.body.nom });
    res.status(201).json(nouveauAbonne);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création de l’abonné', error });
  }
};

exports.update = async (req, res) => {
  try {
    const abonne = await Abonne.findByPk(req.params.id);
    if (!abonne) return res.status(404).json({ message: 'Abonné introuvable' });
    abonne.nom = req.body.nom;
    await abonne.save();
    res.status(200).json(abonne);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour de l’abonné', error });
  }
};

exports.delete = async (req, res) => {
  try {
    const abonne = await Abonne.findByPk(req.params.id);
    if (!abonne) return res.status(404).json({ message: 'Abonné introuvable' });
    await abonne.destroy();
    res.status(200).json({ message: 'Abonné supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression de l’abonné', error });
  }
};

