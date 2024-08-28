## API Report File for "@alithya-oss/plugin-aws-codebuild-common"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { Build } from '@aws-sdk/client-codebuild';
import { Entity } from '@backstage/catalog-model';
import { Project } from '@aws-sdk/client-codebuild';

// @public (undocumented)
export const AWS_CODEBUILD_ARN_ANNOTATION =
  'aws.amazon.com/aws-codebuild-project-arn';

// @public (undocumented)
export const AWS_CODEBUILD_ARN_ANNOTATION_LEGACY =
  'aws.amazon.com/aws-codebuild-project';

// @public (undocumented)
export const AWS_CODEBUILD_TAGS_ANNOTATION =
  'aws.amazon.com/aws-codebuild-project-tags';

// @public (undocumented)
export function mockCodeBuildProject(project: string): Project;

// @public (undocumented)
export function mockCodeBuildProjectBuild(project: string, id: string): Build;

// @public (undocumented)
export const mockEntityWithArn: Entity;

// @public (undocumented)
export const mockEntityWithArnLegacy: Entity;

// @public (undocumented)
export const mockEntityWithTags: Entity;

// @public (undocumented)
export interface ProjectResponse {
  // (undocumented)
  builds: Array<Build>;
  // (undocumented)
  project: Project;
  // (undocumented)
  projectAccountId: string;
  // (undocumented)
  projectName: string;
  // (undocumented)
  projectRegion: string;
}

// @public (undocumented)
export interface ProjectsResponse {
  // (undocumented)
  projects: Array<ProjectResponse>;
}

// (No @packageDocumentation comment for this package)
```