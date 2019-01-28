module.exports = {
  presets: [
    ['@babel/preset-env', { modules: false, targets: '> 0.25%, not dead' }],
    ['@babel/preset-react'],
  ],
  plugins: ['@babel/plugin-proposal-class-properties'],
};
