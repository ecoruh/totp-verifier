#!/usr/bin/env node
const speakeasy = require('speakeasy');
const readline = require('readline');

// Read the secret from the command-line arguments
const secret = process.argv[2];
if (!secret) {
  console.error('Usage: node totp-verifier.js <secret>');
  process.exit(1);
}

// Set up readline to prompt for TOTP code
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your TOTP: ', (token) => {
  // Verify the provided TOTP token against the secret
  const verified = speakeasy.totp.verify({
    secret: secret,
    encoding: 'base32',
    token: token,
    window: 1  // This allows for a one time-step margin for clock drift
  });

  if (verified) {
    console.log('Success!');
  } else {
    console.log('Error!');
  }

  rl.close();
});
