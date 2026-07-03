# Firebase App Hosting Runbook

This repo is prepared for Firebase App Hosting only. Do not use Firebase Hosting, `firebase.json`, or a GitHub Action that runs `firebase deploy` for this app.

The intended deployment model is:

1. GitHub Actions verifies the app.
2. Firebase App Hosting watches the live branch.
3. A push or merge to the live branch creates a Firebase App Hosting rollout.

## One-time setup

1. Create or choose a Firebase project.
2. Make sure the project is on the Blaze plan. Firebase App Hosting may prompt for this during backend creation.
3. Push this `dub-lite` repo to GitHub.
4. Create an App Hosting backend from the Firebase console:

   - Go to Hosting & Serverless > App Hosting.
   - Select Get started or Create backend.
   - Choose the primary region.
   - Connect GitHub and select this repository.
   - Set the app root directory to `/` if the GitHub repo root is `dub-lite`.
   - Set the live branch to `main`.
   - Keep automatic rollouts enabled.
   - Select Node.js 24 if Firebase offers it as the recommended runtime.
   - Finish and deploy.

You can also create the backend from the Firebase CLI if needed:

   ```sh
   npm install -g firebase-tools
   firebase login
   firebase apphosting:backends:create --project YOUR_FIREBASE_PROJECT_ID
   ```

## Daily deploy flow

1. Open a branch and PR.
2. GitHub Actions runs `npm ci`, `npm run typecheck`, and `npm run build`.
3. Merge into `main` after CI passes.
4. Firebase App Hosting detects the `main` push and creates a rollout automatically.
5. Monitor the rollout in Firebase console > Hosting & Serverless > App Hosting.

## Local verification

```sh
npm run typecheck
npm run build
npm run dev
```

## Notes

- App Hosting uses `apphosting.yaml` for checked-in runtime settings such as CPU, memory, concurrency, and min/max instances.
- Keep secrets out of git. Use Firebase console environment variables or Cloud Secret Manager references in `apphosting.yaml`.
- The first backend creation requires Firebase/GitHub permissions and cannot be fully committed as code. After that, production rollout is GitOps: merge to the live branch.
- If this project later moves into a monorepo, set the App Hosting app root directory to the path that contains `package.json`, for example `/dub-lite`.
