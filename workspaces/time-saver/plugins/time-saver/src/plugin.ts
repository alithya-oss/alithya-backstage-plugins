/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';
import { rootRouteRef } from './routes';

import { BackstagePlugin } from '@backstage/core-plugin-api';
import { JSX as JSX_2 } from 'react';
import { RouteRef } from '@backstage/core-plugin-api';

/**
 *
 * @public
 */
export const TimeSaverPlugin: BackstagePlugin<
  {
    root: RouteRef<undefined>;
  },
  {},
  {}
> = createPlugin({
  id: 'time-saver',
  routes: {
    root: rootRouteRef,
  },
});

/**
 *
 * @public
 */
export const TimeSaverPage: () => JSX_2.Element = TimeSaverPlugin.provide(
  createRoutableExtension({
    name: 'TimeSaverPage',
    component: () =>
      import('./components/TimeSaverPageComponent').then(
        m => m.TimeSaverPageComponent,
      ),
    mountPoint: rootRouteRef,
  }),
);
