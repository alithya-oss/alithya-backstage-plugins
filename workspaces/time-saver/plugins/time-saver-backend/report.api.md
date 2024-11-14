## API Report File for "@alithya-oss/plugin-time-saver-backend"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { AuthService } from '@backstage/backend-plugin-api';
import { BackendFeature } from '@backstage/backend-plugin-api';
import { DatabaseService } from '@backstage/backend-plugin-api';
import { DiscoveryService } from '@backstage/backend-plugin-api';
import express from 'express';
import { HttpAuthService } from '@backstage/backend-plugin-api';
import { LifecycleService } from '@backstage/backend-plugin-api';
import { LoggerService } from '@backstage/backend-plugin-api';
import { PluginTaskScheduler } from '@backstage/backend-tasks';
import { RootConfigService } from '@backstage/backend-plugin-api';
import { UrlReaderService } from '@backstage/backend-plugin-api';

// @public (undocumented)
export function createRouter(options: RouterOptions): Promise<express.Router>;

// @public (undocumented)
export interface RouterOptions {
  // (undocumented)
  auth?: AuthService;
  // (undocumented)
  config: RootConfigService;
  // (undocumented)
  database: DatabaseService;
  // (undocumented)
  discovery: DiscoveryService;
  // (undocumented)
  httpAuth?: HttpAuthService;
  // (undocumented)
  lifecycle: LifecycleService;
  // (undocumented)
  logger: LoggerService;
  // (undocumented)
  scheduler: PluginTaskScheduler;
  // (undocumented)
  urlReader: UrlReaderService;
}

// @public (undocumented)
const timeSaverPlugin: BackendFeature;
export default timeSaverPlugin;
export { timeSaverPlugin };

// (No @packageDocumentation comment for this package)
```