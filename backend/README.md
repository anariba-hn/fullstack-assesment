# Fullstack-Assessment

NodeJS web service using Sequelize ORM for database modeling, including seeders and migrations. Express REST API architecture for handling client front-end requests. Dependency injections through Factories, and a Model-Controller-Service provider.

## Stack

-   Node
-   TypeScript
-   MySQL

### Documentation

[Diagram distributed system with plantUML](https://git.number8.com/dennis.anariba/fullstack-assessment/src/branch/main/backend/src/diagram/db_schema.png)

---

### Usage

After cloning the repository, copy the .env example file and set your environment variables

```
cd fullstack-assessment/backend
cp ./.env.example ./.env
```

_Otherwise copy the file directly_

Spin up your database service, for this example we are using a Mysql dialect over an Apache engine.

Run the next sql script to [DATABASE CREATION](https://git.number8.com/dennis.anariba/fullstack-assessment.git)

Package install

```
npm install
```

Run seeders and Migrations

```
npm run migrations & npm run seeds
```

Build

```
nmp run build
```

Start the application

```
npm run start
```

---

_You can also use other scripts stablish on the package.json file_

Run the linter and Prettier to format and evaluate common code patterns.

```
npm run prepare
```

Run the development environment and watch changes.

```
npm run dev
```
