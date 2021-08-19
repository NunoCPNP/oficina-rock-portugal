const nextTranslate = require("next-translate");
const { withSentryConfig } = require("@sentry/nextjs");

moduleExports = {
  reactStrictMode: true,
  ...nextTranslate(),
  images: {
    domains: ["static.oficinarock.com.br"],
  },
};

const SentryWebpackPluginOptions = {
  silent: true,
};

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions);
