const imagesURLS = [
  'antarctica_pilsen_300ml.jpg',
  'heineken_600ml.jpg',
  'antarctica_pilsen_300ml.jpg',
  'brahma_600ml.jpg',
  'skol_269ml.jpg',
  'skol_beats_senses_313ml.jpg',
  'becks_330ml.jpg',
  'brahma_duplo_malte_350ml.jpg',
  'becks_600ml.jpg',
  'skol_beats_senses_269ml.jpg',
  'stella_artois_275ml.jpg',
];

const imagesMiddleware = (req, res, next) => {
  if (req.path === '/') {
    return res.status(200).json({ availableImages: imagesURLS });
  }
  next();
};

module.exports = imagesMiddleware;