/**
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Config } from '@backstage/config';
import { AwsResourceLocator, AwsResourceTaggingApiLocator } from '.';
import { AwsResourceExplorerLocator } from './resource-explorer-locator';
import { AwsConfigResourceLocator } from './aws-config-locator';
import { LoggerService } from '@backstage/backend-plugin-api';

/** @public */
export class AwsResourceLocatorFactory {
  static async fromConfig(
    config: Config,
    logger: LoggerService,
  ): Promise<AwsResourceLocator> {
    const conf = config.getOptionalConfig('aws.locator');

    if (conf) {
      const locatorType = conf.getOptionalString('type');

      switch (locatorType) {
        case 'resourceExplorer':
          return await AwsResourceExplorerLocator.fromConfig(config, {
            logger,
          });
        case 'awsConfig':
          return await AwsConfigResourceLocator.fromConfig(config, {
            logger,
          });
        default:
          logger.warn('Defaulting to resource tagging API locator');
      }
    }

    return await AwsResourceTaggingApiLocator.fromConfig(config, {
      logger,
    });
  }
}
