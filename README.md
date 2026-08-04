# Camerofon official website

Official website for Camerofon: an Android app that turns a spare phone into a remote home camera.

- Website: https://camerofon.online
- Privacy policy: https://camerofon.online/privacy/
- Stable app version: 1.25.38

The site is statically exported with Next.js and deployed through GitHub Pages.

## Local build

```bash
npm ci
npm run build
```

The generated site is written to `out/`.

## Security

Signing keys, `keystore.properties`, encrypted signing backups, Firebase secrets, and private Android source archives must never be committed to this repository.
