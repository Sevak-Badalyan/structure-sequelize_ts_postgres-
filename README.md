# structure-sequelize_ts_postgres-
This project is a preliminary structure for building a TypeScript application using the MVC (Model-View-Controller) architecture with Sequelize and PostgreSQL. It provides a foundational setup to help you quickly start developing your application.

Prerequisites
Node.js
TypeScript
PostgreSQL
Sequelize CLI


 http://localhost:3000/api/users

#Run the Application

npm install

npm run dev
This command uses ts-node to run the src/app.ts file.

#Run Migrations


npm run migrate
This command applies all pending migrations to the database.

#Undo Last Migration


npm run migrate-down
This command undoes the last applied migration.

#Run Seeds


npm run seed
This command seeds the database with initial data.

#Undo Last Seed

npm run seed-down
This command undoes the last applied seed.