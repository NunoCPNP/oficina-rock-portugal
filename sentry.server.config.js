import * as Sentry from "@sentry/nextjs";

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn:
    SENTRY_DSN ||
    "https://77383786af0b43468918a6ed3a33b34d@o965193.ingest.sentry.io/5915939",
  tracesSampleRate: 1.0,
});
