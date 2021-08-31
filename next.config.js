const nextTranslate = require('next-translate')
const { withSentryConfig } = require('@sentry/nextjs')

moduleExports = {
  reactStrictMode: true,
  ...nextTranslate(),
}

const SentryWebpackPluginOptions = {
  silent: true,
}

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions)
