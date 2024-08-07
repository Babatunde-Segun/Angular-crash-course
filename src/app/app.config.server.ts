import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideRouter, withDebugTracing } from '@angular/router';
import { RouterModule, Routes, Route } from '@angular/router';
import { routes } from './app.routes';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideRouter(routes, withDebugTracing()),
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
