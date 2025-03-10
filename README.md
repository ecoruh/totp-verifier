# totp-verifier
TOTP verifier is a NodeJS CLI which takes a single mandatory argument which is the secret code printed on the terminal of [qr-code-generator](https://github.com/ecoruh/qr-code-generator) app.

Once the application runs, it prompts for a TOTP entry. The user reads TOTP from the Authenticator app, and enters on the verifier prompt. If the TOTP is valid the CLI prints “Success!” and exits. If the TOTP is invalid or expired the CLI prints “Error!” and exits.
