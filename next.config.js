const nextTranslate = require('next-translate')
const { withSentryConfig } = require('@sentry/nextjs')

moduleExports = {
  reactStrictMode: true,
  eslint: {
    dirs: [
      'src/components',
      'src/context',
      'src/hooks',
      'src/Layout',
      'src/modules',
      'src/pages',
      'src/services',
      'src/styles',
    ],
  },
  ...nextTranslate(),
}

const SentryWebpackPluginOptions = {
  silent: true,
}

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions)
