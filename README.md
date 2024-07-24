<p align="center">
  <a href="" target="blank"><img src="img/angular.svg" width="100" alt="Nest Logo" /></a>
  <a href="/" target="blank"><img src="img/nestjs.svg" width="100" alt="Nest Logo" /></a>
  <a href="" target="blank"><img src="img/typeorm.svg" width="100" alt="Nest Logo" /></a>
  <a href="" target="blank"><img src="img/jest.svg" width="100" alt="Nest Logo" /></a>
  <a href="" target="blank"><img src="img/postgresql.svg" width="100" alt="Nest Logo" /></a>
  <a href="" target="blank"><img src="img/docker.svg" width="100" alt="Nest Logo" /></a>
  <a href="" target="blank"><img src="img/typescript.svg" width="100" alt="Nest Logo" /></a>
</p>
    
## Description
Hotels backoffice built with:
- Frontend: Angular + Angular Material
- Backend: NestJs + TypeORM + Jest
- DB: PostgreSQL

## Installation for each project

```bash
$ npm install
```

## Running the backend app

First open Docker Desktop

```bash
# run database
docker compose up -d
```

```bash
# development
$ npm run start

or

# watch mode
$ npm run start:dev
```

## Running the frontend app

```bash
# development
$ ng serve -o
```

## Test the backend app

```bash
# unit tests
$ npm run test
```

or 

```bash
# unit tests watch mode
$ npm run test:watch
```
