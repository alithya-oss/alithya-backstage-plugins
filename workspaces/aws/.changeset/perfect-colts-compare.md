---
'@alithya-oss/plugin-aws-apps-backend': minor
'@alithya-oss/plugin-aws-apps-common': minor
'@alithya-oss/plugin-aws-apps': minor
---

Implemented `@backstage/integration-aws-node` enabling reuse of credentials shared with other AWS integrated plugins (e.g. [Roadie](https://github.com/RoadieHQ/roadie-backstage-plugins/tree/main/plugins/backend/catalog-backend-module-aws), [AWS CodeStar](https://github.com/awslabs/backstage-plugins-for-aws)), and running Harmonix outside of an AWS account (Credits: @fjudith). Bump framework version 1.30.4, optimized code-style, and comply CI with [community-plugins](https://github.com/backstage/community-plugins) (Credits: @fleveillee).