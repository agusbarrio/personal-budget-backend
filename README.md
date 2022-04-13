# personal-budget-backend

API REST que permite administrar un presupuesto personal mediante operaciones.

Para iniciar localmente:

1 - Si no la posee, crear la base de datos en MySQL.
Ejecutar los siquientes comandos en la linea de comandos de MySQL o en MySQLWorkbench:
CREATE DATABASE IF NOT EXISTS db-name;
USE db-name;

2 - Clonar el repositorio.
Abrir Git Bash en la carpeta donde se desea guardar el proyecto y ejecutar:

    $ git clone https://github.com/agusbarrio/personal-budget-backend.git

3 - Cambiar el nombre del archivo example.env a .env. Modificar el contenido del archivo con los datos correspondientes de su usuario local de MySQL.
Por ejemplo:

      DB_NAME=db-name
      DB_USER=root
      DB_PASSWORD=
      DB_HOST=127.0.0.1


4 - Instalar las dependencias necesarias:

    npm install

5 - Migracion de datos:

    npx sequelize-cli db:migrate

6 - Seeders. Datos de ejemplo (opcional):

    npx sequelize-cli db:seed:all

7 - Iniciar la aplicación localmente:

    npm start

| Método | Ruta                           | Descripción                                                                                                             |
| ------ | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| GET    | /api/operations                | Recupera todas las operaciones                                                                                          |
| GET    | /api/operations?page=n         | Recupera las 10 operaciones indicadas por el parámetro n >= 1 siendo n=1 los primeros 10 registros                      |
| GET    | /api/operations/id             | Recupera la operación con el id correspondiente siendo el parámetro id >= 1                                             |
| GET    | /api/operations/concept        | Recupera todas las operaciones que coincidan con el parámetro concept correspondiente                                   |
| GET    | /api/operations/concept?page=n | Recupera 10 operaciones que coincidan con el parametro concept correspondiente                                          |
| GET    | /api/operations/type           | Recupera todas las operaciones que coincidan con el type correspondiente (income - expense)                             |
| GET    | /api/operations/type?page=n    | Recupera 10 operaciones que coincidan con el type correspondiente (income - expense)                                    |
| POST   | /api/operations                | Agrega una operación. Se espera recibir un JSON con los siguientes datos:                                               |
|        |                                | `{"concept": "others", "amount": 98.3, "_type": "expense"}`                                                             |
| PUT    | /api/operations/id             | Actualiza una operación existente que coincida con el parametro id. Se espera recibir un JSON con los siguientes datos: |
|        |                                | `{"concept": "others", "amount": 98.3}`                                                                                 |

Conceptos válidos de operaciones:

- 'entertainment'
- 'supermarket'
- 'clothing'
- 'services'
- 'travels'
- 'others'
- 'transport'
- 'technology'
- 'subscriptions'
- 'home'
- 'job'

Tipos válidos de operaciones:

- 'expense'
- 'income'
