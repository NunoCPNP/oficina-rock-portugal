const nextTranslate = require('next-translate')
const { withSentryConfig } = require('@sentry/nextjs')

moduleExports = {
  reactStrictMode: true,
  eslint: {
    dirs: ['components', 'context', 'hooks', 'Layout', 'modules', 'pages', 'services', 'styles'],
  },
  reactStrictMode: true,
  ...nextTranslate(),
}

const SentryWebpackPluginOptions = {
  silent: true,
}

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions)
