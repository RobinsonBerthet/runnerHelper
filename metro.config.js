const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

// Récupérer la configuration par défaut
const defaultConfig = getDefaultConfig(__dirname);

// Extraire les extensions d'assets et de sources
const {assetExts, sourceExts} = defaultConfig.resolver;

/**
 * Configuration Metro
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    // Spécifier le transformer pour les fichiers SVG
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    // Exclure SVG des extensions d'assets pour que Metro ne les traite pas comme des images classiques
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    // Ajouter SVG comme extension source pour les transformer
    sourceExts: [...sourceExts, 'svg'],
  },
};

// Fusionner la configuration par défaut avec celle que nous avons définie
module.exports = mergeConfig(defaultConfig, config);
