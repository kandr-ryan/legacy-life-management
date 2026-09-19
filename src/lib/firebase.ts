/**
 * Client config for a future Firebase Hosting / App Hosting project.
 * Safe without live credentials: the app never initializes Firebase
 * unless NEXT_PUBLIC_FIREBASE_API_KEY is set.
 */
export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? "",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? "",
  projectId:
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "legacy-life-management",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ?? "",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? "",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ?? "",
} as const;

export function isFirebaseConfigured(): boolean {
  return firebaseConfig.apiKey.length > 0 && firebaseConfig.appId.length > 0;
}
