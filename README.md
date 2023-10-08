# EDT test, api REST for melp with geoLocation

To create this api I decided to use the Nest.js framework, it is my favorite framework to create node.js apis with express or fastify using the best programming practices by default, it uses decorators and some things that come from java. I have worked with java many times in the past so it is very comfortable for me to work with nest.js.
For the database I used postgresql and for geolocation I used postgis. I hope you like it :)

API: https://edt-melp-api.onrender.com

DOCS: https://edt-melp-api.onrender.com/api

POSTMAN COLLECTION: https://www.postman.com/research-explorer-62312899/workspace/edt-api-test-armany/collection/29633827-f88e11c5-b866-477f-a42d-76ab8d128859

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```
