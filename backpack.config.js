module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = './api/app.js'
    return config
  }
}
