import Aura from '@primeuix/themes/aura';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import '@/assets/styles.scss';
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyB8dFKxuyd8le9NWPgxoR_uJkuXBG92CIY',
    authDomain: 'portifolio-9db7a.firebaseapp.com',
    projectId: 'portifolio-9db7a',
    storageBucket: 'portifolio-9db7a.firebasestorage.app',
    messagingSenderId: '833891180184',
    appId: '1:833891180184:web:5fcc80854d86565a7c3aed',
    measurementId: 'G-Y633F5HHKL'
};

// Inicialize o app do Firebase com um nome único
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

// Crie o app Vue como uma instância separada
const app = createApp(App);
app.config.globalProperties.$analytics = analytics;

app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.app-dark'
        }
    }
});
app.use(ToastService);
app.use(ConfirmationService);

app.mount('#app');
