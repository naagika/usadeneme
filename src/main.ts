import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),  // подключаем маршруты
    ...appConfig.providers, // если у тебя в app.config есть провайдеры
  ],
}).catch((err) => console.error(err));
