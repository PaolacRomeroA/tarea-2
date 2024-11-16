import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp({
      "projectId": "curs--cifo",
      "appId": "1:821043008307:web:8e08fecbf424258e5da446",
      "storageBucket": "curs--cifo.firebasestorage.app",
      "apiKey": "AIzaSyCmIvV82PXBElm3BekJ-03EbMST6f09Vpk",
      "authDomain": "curs--cifo.firebaseapp.com",
      "messagingSenderId": "G-HHE39XQGH3"
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideAnimationsAsync()
  ]
};