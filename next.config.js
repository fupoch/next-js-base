const { withModuleFederation } = require('@module-federation/nextjs-mf');

module.exports = withModuleFederation({
  name: 'nextjsApp',
  library: { type: 'var', name: 'nextjsApp' },
  filename: 'static/chunks/remoteEntry.js',
  exposes: {
    './MyComponent': './components/MyComponent', // Экспортируем компонент
  },
  shared: {
    react: {
      singleton: true,
      eager: true,
      requiredVersion: false,
    },
    'react-dom': {
      singleton: true,
      eager: true,
      requiredVersion: false,
    },
  },
})({
  webpack(config, options) {
    return config;
  },
});
