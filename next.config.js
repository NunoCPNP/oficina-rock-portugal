const nextTranslate = require('next-translate')

module.exports = {
  reactStrictMode: true,
  ...nextTranslate(),
  images: {
    domains: ['static.oficinarock.com.br']
  } 
}