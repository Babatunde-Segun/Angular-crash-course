import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { appConfig } from './app/app.config';
import { AppModule } from './app/app.module';

const bootstrap = () => bootstrapApplication(AppComponent, appConfig);

export default bootstrap;
