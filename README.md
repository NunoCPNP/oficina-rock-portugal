# Oficina Rock Portugal

This repository holds the new Oficina Rock Portugal web app.

It's an web application built on [Next JS](https://nextjs.org/) using [Firebase](https://firebase.google.com/) for authentication and [FireStore](https://firebase.google.com/products/firestore) as backend

## Features

- Server Side Rendering for better SEO
- Internationalization
- Spring Animations
- Firebase OAuth and Database Integration
- Serverless Functions
- Stripe for secure payments
- MailJet for email notifications

## Development environment

To start developing, follow this steps:

1. Install [NodeJS](https://nodejs.org/en/) version 12 or greater and Yarn version ^1.22
2. Install dependencies by running `Yarn`
3. Create your .env.local file with your own api keys
4. Start development server by running `yarn dev`

### .env.local necessary keys

````javascript
// Google Firebase Keys

NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID

// MailJet Keys

MJ_APIKEY_PUBLIC
MJ_APIKEY_PRIVATE

//Stripe Keys

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
STRIPE_SECRET_KEY

````
