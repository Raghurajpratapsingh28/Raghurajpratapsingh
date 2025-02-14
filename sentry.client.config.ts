import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://2246051ae80805077dbe9c90c088e867@o4508812647202816.ingest.us.sentry.io/4508812649889792",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
      enableScreenshot: false,
      isNameRequired: true,
      isEmailRequired: true,
    }),
  ],
});