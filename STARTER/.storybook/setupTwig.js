const { resolve } = require('path');
const twigDrupal = require('twig-drupal-filters');
const twigBEM = require('bem-twig-extension');
const twigSUIT = require('suit-twig-extension');
const twigAddAttributes = require('add-attributes-twig-extension');

module.exports.namespaces = {
  atoms: resolve(__dirname, '../', 'base-components/01-atoms'),
  molecules: resolve(__dirname, '../', 'base-components/02-molecules'),
  organisms: resolve(__dirname, '../', 'base-components/03-organisms'),
  templates: resolve(__dirname, '../', 'base-components/04-templates'),
};

/**
 * Configures and extends a standard twig object.
 *
 * @param {Twig} twig - twig object that should be configured and extended.
 *
 * @returns {Twig} configured twig object.
 */
module.exports.setupTwig = function setupTwig(twig) {
  twig.cache();
  twigDrupal(twig);
  twigBEM(twig);
  twigSUIT(twig);
  twigAddAttributes(twig);
  return twig;
};
