// controllers/pretController.js
const Pret = require('../models/pret');
const Livre = require('../models/livre');
const Abonne = require('../models/abonne');



/*exports.create = async (req, res) => {
  try {
    const livre = await Livre.findOne({ where: { id: req.body.livre_id, disponible: true } });
    
    if(!livre){
    //date_retour: NULL;
    return res.status(400).json({message:"Le livre non disponible"});
  }
  console.log("Vérification disponibilité du livre :", livre);

    const nouveauPret = await Pret.create({
      livre_id: req.body.livre_id,
      abonne_id: req.body.abonne_id,
      date_pret: req.body.date_pret,
      date_retour: req.body.date_retour,
      livre_nom: Livre.nom,
      abonne_nom: Abonne.nom
    });

    livre.disponible = false;
    await livre.save();

    res.status(201).json(nouveauPret);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création du prêt', error });
    console.log(error);
  }
};

exports.getAll = async (req, res) => {
  try {
    const prets = await Pret.findAll({
      include: [
        {model: Livre, attributes: ['nom']},
        {model: Abonne, attributes: ['nom']}
      ]
  });

    res.status(200).json(prets);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des prêts', error });
  }
};



exports.update = async (req, res) => {
  try {
    const pret = await Pret.findByPk(req.params.id);
    if (!pret) return res.status(404).json({ message: 'Prêt introuvable' });

    const livre = await Livre.findByPk(pret.livre_id);
    if(!livre) return res.status(404).json({message: 'Livre introuvable'});

    pret.date_pret= req.body.date_retour;
    await livre.save();

    res.status(200).json(pret);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour du prêt', error });
  }
};

exports.delete = async (req, res) => {
  try {
    const pret = await Pret.findByPk(req.params.id);
    if (!pret) return res.status(404).json({ message: 'Prêt introuvable' });
    await pret.destroy();
    res.status(200).json({ message: 'Prêt supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression du prêt', error });
  }
};*/

exports.getAll = async(req, res) => {
  const prets = await Pret.findAll(req.body);
  res.json(prets);
};

exports.updatePret = async (req, res) => {
  const prets = await Pret.update(req.body, { where: { id: req.params.id } });
  res.json(prets);
};

exports.createPret = async (req, res) => {
  const { livreId, abonneId } = req.body;

  // Validation des données
  if (!livreId || !abonneId) {
      return res.status(400).json({ error: 'Les champs livreId et abonneId sont requis.' });
  }

  try {
      const pret = await Pret.create({ livre_id: livreId, abonne_id: abonneId });
      res.json(pret);
  } catch (error) {
      console.error('Erreur lors de la création du prêt:', error);
      res.status(500).json({ error: 'Une erreur est survenue lors de la création du prêt.' });
  }
};


exports.deletePret = async (req, res) => {
  await Pret.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Prêt supprimé' });
};

exports.getPretsDetails = async (req, res) => {
  try {
      const prets = await Pret.findAll({
          include: [
          {
              model: Livre,
              attributes: ['titre', 'auteur']
          },
          {
              model: Abonne,
              attributes: ['nom']
          }
          ]
      });
      res.json(prets);
  } 
  catch (error) {
      res.status(500).json({ error: error.message });
  }
};

exports.getLivrePrets = async (req, res) => {
  try {
      const prets = await Pret.findAll({
          include: [
          {
              model: Livre,
              attributes: ['titre', 'auteur']
          }
          ]
      });
      res.json(prets);
  } 
  catch (error) {
      res.status(500).json({ error: error.message });
  }
};

